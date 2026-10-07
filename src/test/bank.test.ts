import { describe, expect, it } from 'vitest';
import { getChapters, getQuestionById, getQuestionsByChapter, getTotalQuestionCount } from '../bank';
import { buildExam, isPositionDependent } from '../lib/buildExam';

describe('Ngân hàng câu hỏi Pháp luật đại cương', () => {
  it('phải phân tích đầy đủ 7 chương hiện có', () => {
    const chapters = getChapters();
    expect(chapters.length).toBe(7);
    const chapterNumbers = chapters.map((c) => c.number);
    expect(chapterNumbers).toEqual([1, 3, 4, 5, 6, 7, 9]);
  });

  it('mỗi chương phải có đúng 200 câu hỏi, tổng cộng 1.400 câu', () => {
    const chapters = getChapters();
    let total = 0;
    for (const ch of chapters) {
      const qs = getQuestionsByChapter(ch.number);
      expect(qs.length).toBe(200);
      total += qs.length;
    }
    expect(total).toBe(1400);
    expect(getTotalQuestionCount()).toBe(1400);
  });

  it('tất cả câu hỏi phải có 4 lựa chọn, đáp án 0-3 hợp lệ và có giải thích', () => {
    const chapters = getChapters();
    for (const ch of chapters) {
      const qs = getQuestionsByChapter(ch.number);
      for (const q of qs) {
        expect(q.id).toMatch(/^c\d+-\d+$/);
        expect(q.options.length).toBe(4);
        expect(q.options.every((opt) => opt.trim().length > 0)).toBe(true);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThanOrEqual(3);
        expect(q.explanation.trim().length).toBeGreaterThan(0);
        expect(['Dễ', 'Trung bình', 'Vận dụng']).toContain(q.level);
      }
    }
  });

  it('getQuestionById phải truy xuất chính xác câu hỏi theo ID ổn định', () => {
    const q1 = getQuestionById('c1-1');
    expect(q1).toBeDefined();
    expect(q1?.chapter).toBe(1);
    expect(q1?.number).toBe(1);

    const q9_200 = getQuestionById('c9-200');
    expect(q9_200).toBeDefined();
    expect(q9_200?.chapter).toBe(9);
    expect(q9_200?.number).toBe(200);
  });

  it('buildExam phải rút đủ 100 câu hỏi ngẫu nhiên và xáo trộn đáp án chuẩn xác', () => {
    const examQuestions = buildExam({
      config: {
        mode: 'preset',
        title: 'Tổng hợp tất cả chương',
        chapters: [1, 3, 4, 5, 6, 7, 9],
        totalQuestions: 100,
        durationMinutes: 90,
      },
    });

    expect(examQuestions.length).toBe(100);

    // Check unique question IDs
    const ids = new Set(examQuestions.map((q) => q.questionId));
    expect(ids.size).toBe(100);

    // Verify option shuffling mapping
    for (const eq of examQuestions) {
      const rawQ = getQuestionById(eq.questionId);
      expect(rawQ).toBeDefined();
      if (!rawQ) continue;

      // The correct option in shuffled array must match the original answer
      expect(eq.options[eq.correctOptionIndex]).toBe(rawQ.options[rawQ.answer]);

      // If position dependent, optionOrder must be strictly [0, 1, 2, 3]
      if (isPositionDependent(rawQ)) {
        expect(eq.optionOrder).toEqual([0, 1, 2, 3]);
        expect(eq.correctOptionIndex).toBe(rawQ.answer);
      }
    }
  });

  it('nhận diện chính xác các câu hỏi phụ thuộc vị trí và giữ nguyên thứ tự A, B, C, D', () => {
    // Test known position-dependent questions in Chapter 9 (e.g. c9-45: Cả A, B, C đều đúng)
    const q9_45 = getQuestionById('c9-45');
    expect(q9_45).toBeDefined();
    if (q9_45) {
      expect(isPositionDependent(q9_45)).toBe(true);
    }

    const q9_40 = getQuestionById('c9-40');
    expect(q9_40).toBeDefined();
    if (q9_40) {
      expect(isPositionDependent(q9_40)).toBe(true);
    }

    // Normal question should NOT be position dependent (e.g. c1-1)
    const q1_1 = getQuestionById('c1-1');
    expect(q1_1).toBeDefined();
    if (q1_1) {
      expect(isPositionDependent(q1_1)).toBe(false);
    }

    // Test artificial questions with variations in both accented and unaccented
    expect(isPositionDependent({ options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Cả ba đáp án trên đều đúng'] })).toBe(true);
    expect(isPositionDependent({ options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Cả 3 đáp án đều sai'] })).toBe(true);
    expect(isPositionDependent({ options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'ca A, B, C deu dung'] })).toBe(true);
    expect(isPositionDependent({ options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Không có đáp án nào đúng'] })).toBe(true);
    expect(isPositionDependent({ options: ['Lựa chọn 1', 'Lựa chọn 2', 'Lựa chọn 3', 'Lựa chọn 4'] })).toBe(false);
  });
});
