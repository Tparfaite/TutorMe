import { Message } from './message/entities/message.entity';
import { Injectable } from '@nestjs/common';
import { ExamService } from './exam/exam.service';


@Injectable()
export class ExamSeeder {
  constructor(private readonly examService: ExamService) {}

  async seed() {
    const exams = [
      {
        domain: 'Mathematics',
        level: 'primary',
        questions: [
          { question: 'Choose right answer 2+2=?', options: ['3', '4', '5'], correctAnswer: '4' },
          { question: 'Choose right answer 3+5=?', options: ['7', '8', '9'], correctAnswer: '8' },
          { question: 'Choose right answer 3+1=?', options: ['4', '8', '9'], correctAnswer: '4' }
        ]
      },
      {
        domain: 'SET',
        level: 'primary',
        questions: [
          { question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2'], correctAnswer: 'H2O' },
          { question: 'What planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter'], correctAnswer: 'Mars' },
          { question: 'What is the chemical symbol for oxygen?', options: ['H2O', 'CO2', 'O2'], correctAnswer: 'O2' },
        ]
      },
      {
        domain: 'Kinyarwanda',
        level: 'primary',
        questions: [
          { question: 'kinyarwanda?', options: ['H2O', 'CO2', 'O2'], correctAnswer: 'H2O' },
          { question: 'What planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter'], correctAnswer: 'Mars' },
          { question: 'What is the chemical symbol for oxygen?', options: ['H2O', 'CO2', 'O2'], correctAnswer: 'O2' },
        ]
      }
      // Add more exams as needed...
    ];

    for (const exam of exams) {
        try{
            const existingExam=await this.examService.generateExam(exam.level,exam.domain);
            if(!existingExam){
                await this.examService.createExam(exam); 
            }
          console.log("existing",existingExam)
        }catch(error){
          console.log("error",error.sqlMessage)
        }
        
      
    }
  }
}
