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
          { question: 'A rectangle has a length of 10 cm and a width of 5 cm. What is its area?', options: ['50 cm²', '30 cm²', '25 cm²'], correctAnswer: '50 cm²' },
          { question: 'A triangle has a base of 8 cm and a height of 5 cm. What is its area?', options: ['20 cm²', '30 cm²', '40 cm²'], correctAnswer: '20 cm²' },
          { question: 'If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many girls are there?', options: ['10', '12', '14'], correctAnswer: '10' },
          { question: 'What is the least common multiple (LCM) of 6 and 8?', options: ['24', '18', '12'], correctAnswer: '24' },
          { question: 'What is the greatest common divisor (GCD) of 48 and 60?', options: ['12', '18', '24'], correctAnswer: '12' },
          { question: 'What is the value of x in the equation 3x + 5 = 20?', options: ['4', '5', '6'], correctAnswer: '5' },
          { question: 'Convert 3/5 to a decimal.', options: ['0.5', '0.6', '0.7'], correctAnswer: '0.6' },
          { question: 'Convert 0.75 to a fraction.', options: ['3/4', '1/2', '2/3'], correctAnswer: '3/4' },
          { question: 'A circle has a radius of 7 cm. What is its circumference (use π ≈ 3.14)?', options: ['43.96 cm', '44 cm', '21.98 cm'], correctAnswer: '43.96 cm' },
          { question: 'Solve for y: 2y - 7 = 15.', options: ['11', '12', '14'], correctAnswer: '11' },
          { question: 'What is the area of a parallelogram with base 10 cm and height 6 cm?', options: ['60 cm²', '30 cm²', '50 cm²'], correctAnswer: '60 cm²' },
          { question: 'If 5y = 2y + 15, what is the value of y?', options: ['3', '4', '5'], correctAnswer: '5' },
          { question: 'Simplify: 4(3 + 2) - 5', options: ['10', '15', '20'], correctAnswer: '15' },
          { question: 'Find the value of x: 7x - 9 = 5x + 11', options: ['9', '10', '11'], correctAnswer: '10' },
          { question: 'What is the volume of a cube with side length 4 cm?', options: ['64 cm³', '48 cm³', '32 cm³'], correctAnswer: '64 cm³' },
          { question: 'If the average of 4, 8, 12, and x is 10, what is the value of x?', options: ['16', '20', '14'], correctAnswer: '16' },
          { question: 'Convert 2.5 hours to minutes.', options: ['120', '150', '180'], correctAnswer: '150' },
          { question: 'Find the next number in the sequence: 2, 6, 12, 20, __', options: ['28', '30', '32'], correctAnswer: '30' },
          { question: 'If 3a + 4 = 19, what is the value of a?', options: ['5', '6', '7'], correctAnswer: '5' },
          { question: 'Solve: 5x/2 = 10', options: ['4', '6', '8'], correctAnswer: '4' },
          { question: 'The angles of a triangle are in the ratio 2:3:4. What is the measure of the largest angle?', options: ['80°', '90°', '100°'], correctAnswer: '80°' },
          { question: 'If a rectangle has a perimeter of 30 cm and a length of 10 cm, what is its width?', options: ['5 cm', '7 cm', '10 cm'], correctAnswer: '5 cm' },
          { question: 'Solve for x: 2(x + 3) = 16', options: ['5', '6', '7'], correctAnswer: '5' },
          { question: 'What is the median of the data set {3, 7, 9, 15, 21}?', options: ['7', '9', '15'], correctAnswer: '9' },
          { question: 'A shop sells pens at 3 for $1. How many pens can you buy for $5?', options: ['12', '15', '18'], correctAnswer: '15' },
          { question: 'Find the value of y: 4y + 2 = 18', options: ['3', '4', '5'], correctAnswer: '4' },
          { question: 'If a rectangle has an area of 35 cm² and a width of 5 cm, what is its length?', options: ['5 cm', '6 cm', '7 cm'], correctAnswer: '7 cm' },
          { question: 'Simplify: 2(3x + 4) = 22', options: ['2', '3', '4'], correctAnswer: '3' },
          { question: 'If a square has a perimeter of 24 cm, what is the length of one side?', options: ['5 cm', '6 cm', '7 cm'], correctAnswer: '6 cm' },
          { question: 'Solve: 3(x - 2) = 12', options: ['4', '5', '6'], correctAnswer: '6' }
        ]
      }
      ,
      
      {
        "domain": "SET",
        "level": "primary",
        "questions": [
          { question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In"], correctAnswer: "Fe" },
          { question: "What planet is known as the Blue Planet?", options: ["Neptune", "Earth", "Uranus"], correctAnswer: "Earth" },
          { question: "What is the chemical symbol for nitrogen?", options: ["Ni", "N", "Na"], correctAnswer: "N" },
          { question: "What is the freezing point of water?", options: ["0°C", "32°C", "100°C"], correctAnswer: "0°C" },
          { question: "Which planet is known for its Great Red Spot?", options: ["Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
          { question: "What force resists the motion of objects?", options: ["Magnetism", "Friction", "Gravity"], correctAnswer: "Friction" },
          { question: "What do plants release into the air?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correctAnswer: "Oxygen" },
          { question: "What gas do animals exhale?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
          { question: "Which planet is known as the Morning Star?", options: ["Mercury", "Venus", "Mars"], correctAnswer: "Venus" },
          { question: "What part of the plant anchors it to the ground?", options: ["Leaf", "Stem", "Root"], correctAnswer: "Root" },
          { question: "What is the second hardest natural substance on Earth?", options: ["Corundum", "Diamond", "Gold"], correctAnswer: "Corundum" },
          { question: "What is the main gas found in the Sun?", options: ["Oxygen", "Hydrogen", "Helium"], correctAnswer: "Hydrogen" },
          { question: "What part of the cell is responsible for energy production?", options: ["Nucleus", "Mitochondria", "Cell membrane"], correctAnswer: "Mitochondria" },
          { question: "What planet is known for its bright rings?", options: ["Saturn", "Uranus", "Neptune"], correctAnswer: "Saturn" },
          { question: "What device do we use to measure atmospheric pressure?", options: ["Thermometer", "Barometer", "Hygrometer"], correctAnswer: "Barometer" },
          { question: "What is the chemical symbol for sodium?", options: ["Na", "S", "So"], correctAnswer: "Na" },
          { question: "Which planet is the largest in our solar system?", options: ["Earth", "Saturn", "Jupiter"], correctAnswer: "Jupiter" },
          { question: "What is the primary source of energy for plants?", options: ["Soil", "Water", "Sunlight"], correctAnswer: "Sunlight" },
          { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Radius"], correctAnswer: "Stapes" },
          { question: "What process describes water vapor turning into liquid?", options: ["Evaporation", "Condensation", "Precipitation"], correctAnswer: "Condensation" },
          { question: "Which organ filters blood in the human body?", options: ["Liver", "Kidney", "Heart"], correctAnswer: "Kidney" },
          { question: "What is the chemical symbol for helium?", options: ["He", "H", "Hl"], correctAnswer: "He" },
          { question: "What type of energy is stored in food?", options: ["Kinetic", "Chemical", "Thermal"], correctAnswer: "Chemical" },
          { question: "What is the primary component of stars?", options: ["Oxygen", "Helium", "Hydrogen"], correctAnswer: "Hydrogen" },
          { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correctAnswer: "Nitrogen" },
          { question: "What is the chemical symbol for hydrogen?", options: ["H", "Hy", "Hg"], correctAnswer: "H" },
          { question: "What is the basic unit of matter?", options: ["Molecule", "Atom", "Cell"], correctAnswer: "Atom" },
          { question: "What part of the plant is involved in reproduction?", options: ["Leaf", "Flower", "Root"], correctAnswer: "Flower" },
          { question: "What is the Earth's only natural satellite?", options: ["Moon", "Mars", "Venus"], correctAnswer: "Moon" },
          { question: "What substance do ants produce?", options: ["Wax", "Venom", "Formic acid"], correctAnswer: "Formic acid" }
        ]
      }
      ,
      {
        "domain": "Social Studies",
        "level": "primary",
        "questions": [
          { question: "What is the capital city of Rwanda?", options: ["Kigali", "Butare", "Gisenyi"], correctAnswer: "Kigali" },
          { question: "Who is the current president of Rwanda?", options: ["Paul Kagame", "Juvénal Habyarimana", "Paul Rusesabagina"], correctAnswer: "Paul Kagame" },
          { question: "What is the national language of Rwanda?", options: ["French", "Swahili", "Kinyarwanda"], correctAnswer: "Kinyarwanda" },
          { question: "What is the currency of Rwanda?", options: ["Dollar", "Franc", "Shilling"], correctAnswer: "Franc" },
          { question: "What is the name of the highest mountain in Rwanda?", options: ["Mount Karisimbi", "Mount Kilimanjaro", "Mount Everest"], correctAnswer: "Mount Karisimbi" },
          { question: "Which lake is the largest in Rwanda?", options: ["Lake Victoria", "Lake Kivu", "Lake Tanganyika"], correctAnswer: "Lake Kivu" },
          { question: "What is the name of the famous national park in Rwanda known for gorilla trekking?", options: ["Volcanoes National Park", "Akagera National Park", "Nyungwe National Park"], correctAnswer: "Volcanoes National Park" },
          { question: "When did Rwanda gain independence?", options: ["1962", "1971", "1980"], correctAnswer: "1962" },
          { question: "What is the traditional dance of Rwanda?", options: ["Umushanana", "Intore", "Inanga"], correctAnswer: "Intore" },
          { question: "Which ethnic groups are found in Rwanda?", options: ["Hutu, Tutsi, Twa", "Zulu, Xhosa, San", "Hausa, Yoruba, Igbo"], correctAnswer: "Hutu, Tutsi, Twa" },
          { question: "What is the main economic activity in rural Rwanda?", options: ["Fishing", "Farming", "Mining"], correctAnswer: "Farming" },
          { question: "What is the main religion practiced in Rwanda?", options: ["Islam", "Christianity", "Hinduism"], correctAnswer: "Christianity" },
          { question: "What major event happened in Rwanda in 1994?", options: ["The Rwandan Genocide", "Independence", "The African Union Summit"], correctAnswer: "The Rwandan Genocide" },
          { question: "What is the name of the legislative body in Rwanda?", options: ["Congress", "Parliament", "Senate"], correctAnswer: "Parliament" },
          { question: "What is Umuganda in Rwanda?", options: ["Community service", "A traditional dish", "A festival"], correctAnswer: "Community service" },
          { question: "What is the name of the traditional Rwandan drum?", options: ["Ingoma", "Djembe", "Talking drum"], correctAnswer: "Ingoma" },
          { question: "What are Imigongo?", options: ["Traditional paintings", "Dance costumes", "Musical instruments"], correctAnswer: "Traditional paintings" },
          { question: "Which body of water lies to the west of Rwanda?", options: ["Lake Tanganyika", "Lake Victoria", "Lake Kivu"], correctAnswer: "Lake Kivu" },
          { question: "What is the main export product of Rwanda?", options: ["Coffee", "Oil", "Cotton"], correctAnswer: "Coffee" },
          { question: "What is the name of the traditional Rwandan attire for women?", options: ["Kanga", "Sari", "Umushanana"], correctAnswer: "Umushanana" },
          { question: "Who was the first president of Rwanda?", options: ["Grégoire Kayibanda", "Paul Kagame", "Juvénal Habyarimana"], correctAnswer: "Grégoire Kayibanda" },
          { question: "What is the primary source of energy in rural areas of Rwanda?", options: ["Electricity", "Solar", "Firewood"], correctAnswer: "Firewood" },
          { question: "What is the traditional Rwandan house called?", options: ["Igloo", "Rondavel", "Inzu"], correctAnswer: "Inzu" },
          { question: "Which country borders Rwanda to the north?", options: ["Uganda", "Tanzania", "Burundi"], correctAnswer: "Uganda" },
          { question: "What is the name of the major river that flows through Rwanda?", options: ["Nile", "Congo", "Nyabarongo"], correctAnswer: "Nyabarongo" },
          { question: "What is the name of the Rwandan currency?", options: ["Rwandan Shilling", "Rwandan Franc", "Rwandan Dollar"], correctAnswer: "Rwandan Franc" },
          { question: "Which Rwandan king is famous for his resistance against colonialism?", options: ["King Kigeli IV", "King Rwabugiri", "King Musinga"], correctAnswer: "King Kigeli IV" },
          { question: "What is the national motto of Rwanda?", options: ["Unity, Work, Patriotism", "Freedom, Equality, Justice", "Peace, Love, Harmony"], correctAnswer: "Unity, Work, Patriotism" },
          { question: "What traditional crop is Rwanda famous for?", options: ["Coffee", "Tea", "Cotton"], correctAnswer: "Coffee" },
          { question: "What are the colors of the Rwandan flag?", options: ["Blue, Yellow, Green", "Red, White, Blue", "Green, Yellow, Black"], correctAnswer: "Blue, Yellow, Green" }
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
      },
      {
        domain: 'Geography',
        level: 'secondary',
        questions: [
          {
            question: 'Which is the largest continent by land area?',
            options: ['Africa', 'Asia', 'North America', 'Europe'],
            correctAnswer: 'Asia'
          },
          {
            question: 'What is the capital city of Australia?',
            options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
            correctAnswer: 'Canberra'
          },
          {
            question: 'Which desert is the largest in the world?',
            options: ['Sahara Desert', 'Gobi Desert', 'Kalahari Desert', 'Antarctic Desert'],
            correctAnswer: 'Antarctic Desert'
          },
          {
            question: 'Which country has the longest coastline in the world?',
            options: ['Canada', 'Russia', 'Indonesia', 'Australia'],
            correctAnswer: 'Canada'
          },
          {
            question: 'Mount Everest is located in which mountain range?',
            options: ['Andes', 'Himalayas', 'Rockies', 'Alps'],
            correctAnswer: 'Himalayas'
          },
          {
            question: 'The Amazon Rainforest is located in which continent?',
            options: ['Africa', 'South America', 'Asia', 'Australia'],
            correctAnswer: 'South America'
          },
          {
            question: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correctAnswer: 'Pacific Ocean'
          },
          {
            question: 'Which river is the longest in the world?',
            options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
            correctAnswer: 'Nile River'
          },
          {
            question: 'Which country is the smallest by land area?',
            options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
            correctAnswer: 'Vatican City'
          },
          {
            question: 'What is the capital city of Canada?',
            options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
            correctAnswer: 'Ottawa'
          },
          {
            question: 'Which mountain is the tallest in North America?',
            options: ['Mount Whitney', 'Mount Elbert', 'Mount McKinley (Denali)', 'Mount Rainier'],
            correctAnswer: 'Mount McKinley (Denali)'
          },
          {
            question: 'Which country has the highest population in the world?',
            options: ['India', 'United States', 'China', 'Indonesia'],
            correctAnswer: 'China'
          },
          {
            question: 'What is the largest lake in Africa?',
            options: ['Lake Tanganyika', 'Lake Victoria', 'Lake Malawi', 'Lake Chad'],
            correctAnswer: 'Lake Victoria'
          },
          {
            question: 'Which continent is known as the birthplace of humanity?',
            options: ['Asia', 'Europe', 'Africa', 'Australia'],
            correctAnswer: 'Africa'
          },
          {
            question: 'Which US state is known as the "Sunshine State"?',
            options: ['California', 'Hawaii', 'Florida', 'Texas'],
            correctAnswer: 'Florida'
          },
          {
            question: 'Which river flows through Paris?',
            options: ['Thames', 'Seine', 'Danube', 'Rhine'],
            correctAnswer: 'Seine'
          },
          {
            question: 'What is the primary language spoken in Brazil?',
            options: ['Spanish', 'English', 'Portuguese', 'French'],
            correctAnswer: 'Portuguese'
          },
          {
            question: 'Which country is the largest by land area?',
            options: ['Canada', 'China', 'United States', 'Russia'],
            correctAnswer: 'Russia'
          },
          {
            question: 'Which island is the largest in the world?',
            options: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
            correctAnswer: 'Greenland'
          },
          {
            question: 'Which country is known as the Land of the Rising Sun?',
            options: ['China', 'South Korea', 'Japan', 'Thailand'],
            correctAnswer: 'Japan'
          },
          {
            question: 'Which desert is found in northern Africa?',
            options: ['Gobi Desert', 'Kalahari Desert', 'Sahara Desert', 'Atacama Desert'],
            correctAnswer: 'Sahara Desert'
          },
          {
            question: 'Which ocean lies on the west coast of the United States?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correctAnswer: 'Pacific Ocean'
          },
          {
            question: 'Which is the smallest continent by land area?',
            options: ['Europe', 'Australia', 'South America', 'Antarctica'],
            correctAnswer: 'Australia'
          },
          {
            question: 'What is the capital city of Japan?',
            options: ['Kyoto', 'Osaka', 'Tokyo', 'Hiroshima'],
            correctAnswer: 'Tokyo'
          },
          {
            question: 'Which continent has the most countries?',
            options: ['Asia', 'Africa', 'Europe', 'South America'],
            correctAnswer: 'Africa'
          },
          {
            question: 'What is the capital of Egypt?',
            options: ['Cairo', 'Alexandria', 'Giza', 'Luxor'],
            correctAnswer: 'Cairo'
          },
          {
            question: 'What is the world’s largest coral reef system?',
            options: ['Great Barrier Reef', 'Red Sea Coral Reef', 'New Caledonia Barrier Reef', 'Mesoamerican Barrier Reef'],
            correctAnswer: 'Great Barrier Reef'
          },
          {
            question: 'Which country is both in Europe and Asia?',
            options: ['Russia', 'Turkey', 'Kazakhstan', 'All of the above'],
            correctAnswer: 'All of the above'
          },
          {
            question: 'What is the largest country in South America by land area?',
            options: ['Argentina', 'Colombia', 'Peru', 'Brazil'],
            correctAnswer: 'Brazil'
          },
          {
            question: 'Which river is known as the longest in the United States?',
            options: ['Mississippi River', 'Missouri River', 'Colorado River', 'Ohio River'],
            correctAnswer: 'Missouri River'
          }
        ]
      },
      {
        domain: 'English',
        level: 'primary',
        questions: [
          {
            question: 'What is the plural form of "cat"?',
            options: ['Cats', 'Cates', 'Cat', 'Catts'],
            correctAnswer: 'Cats'
          },
          {
            question: 'Which word is a verb?',
            options: ['Run', 'Blue', 'Happy', 'Cat'],
            correctAnswer: 'Run'
          },
          {
            question: 'What is the correct form of the verb "to be" in the sentence "She ___ happy"?',
            options: ['are', 'is', 'am', 'be'],
            correctAnswer: 'is'
          },
          {
            question: 'Which of the following is a complete sentence?',
            options: ['Running fast', 'He is happy', 'Blue sky', 'In the park'],
            correctAnswer: 'He is happy'
          },
          {
            question: 'What is the past tense of "jump"?',
            options: ['Jumped', 'Jumps', 'Jumping', 'Jump'],
            correctAnswer: 'Jumped'
          },
          {
            question: 'What punctuation mark is used at the end of a question?',
            options: ['Period', 'Exclamation mark', 'Question mark', 'Comma'],
            correctAnswer: 'Question mark'
          },
          {
            question: 'Which word is an adjective?',
            options: ['Quick', 'Quickly', 'Quickness', 'Quicker'],
            correctAnswer: 'Quick'
          },
          {
            question: 'Choose the correct article: "I have ___ apple."',
            options: ['a', 'an', 'the', 'none'],
            correctAnswer: 'an'
          },
          {
            question: 'Which of these words is a conjunction?',
            options: ['And', 'Dog', 'Run', 'Happy'],
            correctAnswer: 'And'
          },
          {
            question: 'What is the opposite of "hot"?',
            options: ['Warm', 'Cold', 'Cool', 'Freezing'],
            correctAnswer: 'Cold'
          },
          {
            question: 'Which word is a noun?',
            options: ['Beautiful', 'Dance', 'Teacher', 'Quickly'],
            correctAnswer: 'Teacher'
          },
          {
            question: 'What is the past tense of "eat"?',
            options: ['Eated', 'Ate', 'Eating', 'Eats'],
            correctAnswer: 'Ate'
          },
          {
            question: 'Choose the correct pronoun: "___ is my friend."',
            options: ['He', 'She', 'It', 'They'],
            correctAnswer: 'She'
          },
          {
            question: 'What is the plural form of "baby"?',
            options: ['Babys', 'Babyes', 'Babies', 'Babys'],
            correctAnswer: 'Babies'
          },
          {
            question: 'What is the correct form of the verb "to have" in the sentence "They ___ a new car"?',
            options: ['has', 'have', 'had', 'having'],
            correctAnswer: 'have'
          },
          {
            question: 'Which of the following is an interrogative sentence?',
            options: ['She is happy.', 'Is she happy?', 'She is not happy.', 'She is very happy.'],
            correctAnswer: 'Is she happy?'
          },
          {
            question: 'Which word is a preposition?',
            options: ['Under', 'Happy', 'Sing', 'Quick'],
            correctAnswer: 'Under'
          },
          {
            question: 'What is the opposite of "big"?',
            options: ['Large', 'Small', 'Huge', 'Gigantic'],
            correctAnswer: 'Small'
          },
        ]
      },
      
      {
        domain: 'Mathematics',
        level: 'secondary',
        questions: [
          {
            question: 'What is the value of π (pi) to 2 decimal places?',
            options: ['3.14', '3.15', '3.16', '3.13'],
            correctAnswer: '3.14'
          },
          {
            question: 'Solve for x: 2x + 3 = 7.',
            options: ['x = 2', 'x = 1', 'x = 3', 'x = 4'],
            correctAnswer: 'x = 2'
          },
          {
            question: 'What is the quadratic formula?',
            options: ['x = (-b ± √(b²-4ac))/2a', 'x = (-b ± √(b²+4ac))/2a', 'x = (-b ± √(b²-2ac))/2a', 'x = (-b ± √(b²+2ac))/2a'],
            correctAnswer: 'x = (-b ± √(b²-4ac))/2a'
          },
          {
            question: 'What is the area of a circle with radius r?',
            options: ['πr²', '2πr', 'πr', 'r²'],
            correctAnswer: 'πr²'
          },
          {
            question: 'What is the derivative of sin(x)?',
            options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
            correctAnswer: 'cos(x)'
          },
          {
            question: 'What is the integral of 2x?',
            options: ['x² + C', '2x² + C', 'x + C', '2x + C'],
            correctAnswer: 'x² + C'
          },
          {
            question: 'What is the sum of the angles in a triangle?',
            options: ['180 degrees', '90 degrees', '360 degrees', '270 degrees'],
            correctAnswer: '180 degrees'
          },
          {
            question: 'What is the value of log(100) base 10?',
            options: ['2', '10', '1', '0'],
            correctAnswer: '2'
          },
          {
            question: 'Simplify: (x² - y²)/(x - y).',
            options: ['x + y', 'x - y', 'x² - y²', '1'],
            correctAnswer: 'x + y'
          },
          {
            question: 'What is the solution to the equation x² - 4 = 0?',
            options: ['x = 2 or x = -2', 'x = 4 or x = -4', 'x = 0', 'x = 4'],
            correctAnswer: 'x = 2 or x = -2'
          },
          {
            question: 'If f(x) = 3x + 2, what is f(2)?',
            options: ['8', '7', '6', '5'],
            correctAnswer: '8'
          },
          {
            question: 'What is the probability of getting a head in a coin toss?',
            options: ['0.5', '0.25', '0.75', '1'],
            correctAnswer: '0.5'
          },
          {
            question: 'What is the value of 2³?',
            options: ['8', '6', '4', '10'],
            correctAnswer: '8'
          },
          {
            question: 'What is the midpoint of the line segment joining (2, 3) and (4, 7)?',
            options: ['(3, 5)', '(3, 7)', '(4, 5)', '(2, 7)'],
            correctAnswer: '(3, 5)'
          },
          {
            question: 'What is the value of π (pi) to 2 decimal places?',
            options: ['3.14', '3.15', '3.16', '3.13'],
            correctAnswer: '3.14'
          },
          {
            question: 'Solve for x: 2x + 3 = 7.',
            options: ['x = 2', 'x = 1', 'x = 3', 'x = 4'],
            correctAnswer: 'x = 2'
          },
          {
            question: 'What is the quadratic formula?',
            options: ['x = (-b ± √(b²-4ac))/2a', 'x = (-b ± √(b²+4ac))/2a', 'x = (-b ± √(b²-2ac))/2a', 'x = (-b ± √(b²+2ac))/2a'],
            correctAnswer: 'x = (-b ± √(b²-4ac))/2a'
          },
          {
            question: 'What is the area of a circle with radius r?',
            options: ['πr²', '2πr', 'πr', 'r²'],
            correctAnswer: 'πr²'
          },
          {
            question: 'What is the derivative of sin(x)?',
            options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
            correctAnswer: 'cos(x)'
          },
          {
            question: 'What is the integral of 2x?',
            options: ['x² + C', '2x² + C', 'x + C', '2x + C'],
            correctAnswer: 'x² + C'
          },
          {
            question: 'What is the sum of the angles in a triangle?',
            options: ['180 degrees', '90 degrees', '360 degrees', '270 degrees'],
            correctAnswer: '180 degrees'
          },
          {
            question: 'What is the value of log(100) base 10?',
            options: ['2', '10', '1', '0'],
            correctAnswer: '2'
          },
          {
            question: 'Simplify: (x² - y²)/(x - y).',
            options: ['x + y', 'x - y', 'x² - y²', '1'],
            correctAnswer: 'x + y'
          },
          {
            question: 'What is the solution to the equation x² - 4 = 0?',
            options: ['x = 2 or x = -2', 'x = 4 or x = -4', 'x = 0', 'x = 4'],
            correctAnswer: 'x = 2 or x = -2'
          },
          {
            question: 'If f(x) = 3x + 2, what is f(2)?',
            options: ['8', '7', '6', '5'],
            correctAnswer: '8'
          },
          {
            question: 'What is the probability of getting a head in a coin toss?',
            options: ['0.5', '0.25', '0.75', '1'],
            correctAnswer: '0.5'
          },
          {
            question: 'What is the value of 2³?',
            options: ['8', '6', '4', '10'],
            correctAnswer: '8'
          },
          {
            question: 'What is the midpoint of the line segment joining (2, 3) and (4, 7)?',
            options: ['(3, 5)', '(3, 7)', '(4, 5)', '(2, 7)'],
            correctAnswer: '(3, 5)'
          },
          {
            question: 'Solve for y: 3y - 9 = 0.',
            options: ['y = 3', 'y = -3', 'y = 0', 'y = 9'],
            correctAnswer: 'y = 3'
          },
          {
            question: 'What is the value of the hypotenuse in a right-angled triangle with sides of length 3 and 4?',
            options: ['5', '6', '7', '8'],
            correctAnswer: '5'
          },
          {
            question: 'What is the result of (2 + 3i) + (1 - 4i)?',
            options: ['3 - i', '1 - 7i', '3 + i', '2 - i'],
            correctAnswer: '3 - i'
          },
          {
            question: 'What is the slope of the line given by the equation 2y = 4x + 6?',
            options: ['2', '-2', '4', '-4'],
            correctAnswer: '2'
          },
          {
            question: 'What is the volume of a cube with side length s?',
            options: ['s³', '3s', 's²', '6s'],
            correctAnswer: 's³'
          },
          {
            question: 'What is the result of 5! (5 factorial)?',
            options: ['120', '60', '24', '5'],
            correctAnswer: '120'
          },
          {
            question: 'What is the value of the expression 3x² when x = 2?',
            options: ['12', '6', '8', '10'],
            correctAnswer: '12'
          },
          {
            question: 'What is the circumference of a circle with diameter d?',
            options: ['πd', '2πd', 'πd²', 'd²/4π'],
            correctAnswer: 'πd'
          },
          {
            question: 'What is the common ratio in the geometric sequence 2, 6, 18, 54, ...?',
            options: ['3', '2', '6', '9'],
            correctAnswer: '3'
          },
          {
            question: 'What is the value of √(49)?',
            options: ['7', '14', '9', '5'],
            correctAnswer: '7'
          },
          {
            question: 'What is the solution to the inequality 3x - 4 > 2?',
            options: ['x > 2', 'x > 3', 'x > 1', 'x > 0'],
            correctAnswer: 'x > 2'
          },
          {
            question: 'What is the slope-intercept form of the equation of a line?',
            options: ['y = mx + b', 'ax + by = c', 'x² + y² = r²', 'y = ax² + bx + c'],
            correctAnswer: 'y = mx + b'
          },
          {
            question: 'What is the value of the expression 2³ + 3²?',
            options: ['17', '13', '14', '19'],
            correctAnswer: '17'
          }
      
        ]
      },
      
    
      {
        domain: 'History',
        level: 'secondary',
        questions: [
          {
            question: 'Who was the first President of the United States?',
            options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln', 'John Adams'],
            correctAnswer: 'George Washington'
          },
          {
            question: 'What year did World War II end?',
            options: ['1942', '1945', '1948', '1950'],
            correctAnswer: '1945'
          },
          {
            question: 'Which ancient civilization built the pyramids?',
            options: ['Romans', 'Greeks', 'Egyptians', 'Mesopotamians'],
            correctAnswer: 'Egyptians'
          },
          {
            question: 'Who was the principal author of the Declaration of Independence?',
            options: ['Benjamin Franklin', 'John Adams', 'Thomas Jefferson', 'George Washington'],
            correctAnswer: 'Thomas Jefferson'
          },
          {
            question: 'What was the primary cause of the American Civil War?',
            options: ['Economic policies', 'State rights', 'Slavery', 'Territorial expansion'],
            correctAnswer: 'Slavery'
          },
          {
            question: 'Who discovered America in 1492?',
            options: ['Leif Erikson', 'Christopher Columbus', 'Amerigo Vespucci', 'Ferdinand Magellan'],
            correctAnswer: 'Christopher Columbus'
          },
          {
            question: 'Which empire was ruled by Julius Caesar?',
            options: ['Greek Empire', 'Egyptian Empire', 'Roman Empire', 'Ottoman Empire'],
            correctAnswer: 'Roman Empire'
          },
          {
            question: 'What year did the Berlin Wall fall?',
            options: ['1985', '1987', '1989', '1991'],
            correctAnswer: '1989'
          },
          {
            question: 'Who was the British Prime Minister during World War II?',
            options: ['Neville Chamberlain', 'Winston Churchill', 'Clement Attlee', 'Margaret Thatcher'],
            correctAnswer: 'Winston Churchill'
          },
          {
            question: 'What was the name of the ship that brought the Pilgrims to America in 1620?',
            options: ['Mayflower', 'Santa Maria', 'Pinta', 'Nina'],
            correctAnswer: 'Mayflower'
          },
          {
            question: 'Which war was fought between the North and South regions in the United States?',
            options: ['Revolutionary War', 'War of 1812', 'Civil War', 'Mexican-American War'],
            correctAnswer: 'Civil War'
          },
          {
            question: 'Who was the first female Prime Minister of the United Kingdom?',
            options: ['Theresa May', 'Margaret Thatcher', 'Angela Merkel', 'Indira Gandhi'],
            correctAnswer: 'Margaret Thatcher'
          },
          {
            question: 'Which empire was known for its road network and legal system?',
            options: ['Greek Empire', 'Persian Empire', 'Roman Empire', 'Byzantine Empire'],
            correctAnswer: 'Roman Empire'
          },
          {
            question: 'In which year did the French Revolution begin?',
            options: ['1776', '1789', '1804', '1815'],
            correctAnswer: '1789'
          },
          {
            question: 'Who was the leader of the Soviet Union during the Cuban Missile Crisis?',
            options: ['Joseph Stalin', 'Nikita Khrushchev', 'Leonid Brezhnev', 'Mikhail Gorbachev'],
            correctAnswer: 'Nikita Khrushchev'
          },
          {
            question: 'What was the primary purpose of the Magna Carta?',
            options: ['Establishing the British Parliament', 'Limiting the power of the king', 'Declaring independence from Britain', 'Ending serfdom'],
            correctAnswer: 'Limiting the power of the king'
          },
          {
            question: 'Which ancient city is known for its pyramids and the Sphinx?',
            options: ['Rome', 'Athens', 'Giza', 'Babylon'],
            correctAnswer: 'Giza'
          },
          {
            question: 'Who wrote the Communist Manifesto?',
            options: ['Karl Marx and Friedrich Engels', 'Vladimir Lenin', 'Joseph Stalin', 'Leon Trotsky'],
            correctAnswer: 'Karl Marx and Friedrich Engels'
          },
          {
            question: 'Which country was divided by the 38th parallel after World War II?',
            options: ['Germany', 'Vietnam', 'Korea', 'China'],
            correctAnswer: 'Korea'
          },
          {
            question: 'Who was the last Tsar of Russia?',
            options: ['Nicholas I', 'Alexander III', 'Nicholas II', 'Peter the Great'],
            correctAnswer: 'Nicholas II'
          },
          {
            question: 'Which document marked the end of the American Revolutionary War?',
            options: ['The Declaration of Independence', 'The Constitution', 'The Treaty of Paris', 'The Bill of Rights'],
            correctAnswer: 'The Treaty of Paris'
          },
          {
            question: 'Who was the famous civil rights leader who delivered the "I Have a Dream" speech?',
            options: ['Malcolm X', 'Rosa Parks', 'Martin Luther King Jr.', 'Frederick Douglass'],
            correctAnswer: 'Martin Luther King Jr.'
          },
          {
            question: 'Which war was primarily fought over religious differences between Catholics and Protestants?',
            options: ['The Thirty Years War', 'The War of the Roses', 'The American Civil War', 'The Napoleonic Wars'],
            correctAnswer: 'The Thirty Years War'
          },
          {
            question: 'Who was the famous British queen who ruled for 63 years during the 19th century?',
            options: ['Elizabeth I', 'Mary I', 'Victoria', 'Anne'],
            correctAnswer: 'Victoria'
          },
          {
            question: 'Which battle is considered the turning point of the American Civil War?',
            options: ['Battle of Antietam', 'Battle of Gettysburg', 'Battle of Bull Run', 'Battle of Fort Sumter'],
            correctAnswer: 'Battle of Gettysburg'
          },
          {
            question: 'Who was the Emperor of France who was exiled to the island of Elba?',
            options: ['Louis XVI', 'Napoleon Bonaparte', 'Charlemagne', 'Louis XIV'],
            correctAnswer: 'Napoleon Bonaparte'
          },
          {
            question: 'Which event started World War I?',
            options: ['The assassination of Archduke Franz Ferdinand', 'The invasion of Poland', 'The sinking of the Lusitania', 'The Zimmerman Telegram'],
            correctAnswer: 'The assassination of Archduke Franz Ferdinand'
          },
          {
            question: 'What was the main focus of the Renaissance?',
            options: ['Scientific discoveries', 'Religious reforms', 'Art and culture', 'Military conquests'],
            correctAnswer: 'Art and culture'
          },
          {
            question: 'Who was the first Emperor of China?',
            options: ['Liu Bang', 'Kublai Khan', 'Qin Shi Huang', 'Sun Yat-sen'],
            correctAnswer: 'Qin Shi Huang'
          },
          {
            question: 'Which treaty ended World War I?',
            options: ['Treaty of Versailles', 'Treaty of Tordesillas', 'Treaty of Brest-Litovsk', 'Treaty of Ghent'],
            correctAnswer: 'Treaty of Versailles'
          }
        ]
      },
      {
        domain: 'Physics',
        level: 'secondary',
        questions: [
          {
            question: 'What is the unit of force?',
            options: ['Newton', 'Joule', 'Watt', 'Pascal'],
            correctAnswer: 'Newton'
          },
          {
            question: 'Which law states that for every action, there is an equal and opposite reaction?',
            options: ['Newton’s First Law', 'Newton’s Second Law', 'Newton’s Third Law', 'Law of Gravitation'],
            correctAnswer: 'Newton’s Third Law'
          },
          {
            question: 'What is the speed of light in vacuum?',
            options: ['3 × 10^8 m/s', '3 × 10^6 m/s', '3 × 10^10 m/s', '3 × 10^4 m/s'],
            correctAnswer: '3 × 10^8 m/s'
          },
          {
            question: 'What is the formula for kinetic energy?',
            options: ['mv', '1/2 mv^2', 'mgh', 'Fd'],
            correctAnswer: '1/2 mv^2'
          },
          {
            question: 'What phenomenon explains the bending of light around the edges of obstacles?',
            options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
            correctAnswer: 'Diffraction'
          },
          {
            question: 'Which element has the highest electrical conductivity?',
            options: ['Gold', 'Silver', 'Copper', 'Aluminum'],
            correctAnswer: 'Silver'
          },
          {
            question: 'What is the unit of electric current?',
            options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
            correctAnswer: 'Ampere'
          },
          {
            question: 'Who developed the theory of relativity?',
            options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
            correctAnswer: 'Albert Einstein'
          },
          {
            question: 'What is the main source of energy for the Sun?',
            options: ['Combustion', 'Nuclear Fission', 'Nuclear Fusion', 'Geothermal Energy'],
            correctAnswer: 'Nuclear Fusion'
          },
          {
            question: 'What is the unit of frequency?',
            options: ['Hertz', 'Second', 'Meter', 'Joule'],
            correctAnswer: 'Hertz'
          },
          {
            question: 'What is the value of gravitational acceleration on Earth?',
            options: ['9.8 m/s^2', '8.9 m/s^2', '10.2 m/s^2', '7.8 m/s^2'],
            correctAnswer: '9.8 m/s^2'
          },
          {
            question: 'What is the principle behind the operation of a hydraulic lift?',
            options: ['Bernoulli’s Principle', 'Archimedes’ Principle', 'Pascal’s Law', 'Coulomb’s Law'],
            correctAnswer: 'Pascal’s Law'
          },
          {
            question: 'What is the SI unit of work?',
            options: ['Newton', 'Joule', 'Watt', 'Pascal'],
            correctAnswer: 'Joule'
          },
          {
            question: 'Which type of lens is used to correct short-sightedness?',
            options: ['Concave Lens', 'Convex Lens', 'Plano Lens', 'Biconcave Lens'],
            correctAnswer: 'Concave Lens'
          },
          {
            question: 'What is the formula for Ohm’s Law?',
            options: ['V = IR', 'P = VI', 'F = ma', 'E = mc^2'],
            correctAnswer: 'V = IR'
          },
          {
            question: 'Which fundamental force is responsible for the structure of atomic nuclei?',
            options: ['Gravitational Force', 'Electromagnetic Force', 'Strong Nuclear Force', 'Weak Nuclear Force'],
            correctAnswer: 'Strong Nuclear Force'
          },
          {
            question: 'What is the unit of pressure?',
            options: ['Newton', 'Pascal', 'Joule', 'Watt'],
            correctAnswer: 'Pascal'
          },
          {
            question: 'What is the principle behind the conservation of energy?',
            options: ['Energy cannot be created or destroyed', 'Energy can only be converted from one form to another', 'Both A and B', 'None of the above'],
            correctAnswer: 'Both A and B'
          },
          {
            question: 'What does E=mc^2 represent?',
            options: ['Newton’s Law', 'Einstein’s Mass-Energy Equivalence', 'Ohm’s Law', 'Heisenberg’s Uncertainty Principle'],
            correctAnswer: 'Einstein’s Mass-Energy Equivalence'
          },
          {
            question: 'What type of wave is light?',
            options: ['Longitudinal Wave', 'Transverse Wave', 'Surface Wave', 'Mechanical Wave'],
            correctAnswer: 'Transverse Wave'
          },
          {
            question: 'What is the phenomenon where light changes direction as it passes through different media?',
            options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
            correctAnswer: 'Refraction'
          },
          {
            question: 'What is the measure of the average kinetic energy of the particles in a system?',
            options: ['Heat', 'Temperature', 'Entropy', 'Enthalpy'],
            correctAnswer: 'Temperature'
          },
          {
            question: 'What is the charge of a proton?',
            options: ['Positive', 'Negative', 'Neutral', 'It varies'],
            correctAnswer: 'Positive'
          },
          {
            question: 'What is the unit of power?',
            options: ['Newton', 'Joule', 'Watt', 'Pascal'],
            correctAnswer: 'Watt'
          },
          {
            question: 'What is the first law of thermodynamics?',
            options: ['Energy cannot be created or destroyed', 'Entropy always increases', 'The pressure of a gas is directly proportional to its temperature', 'Force equals mass times acceleration'],
            correctAnswer: 'Energy cannot be created or destroyed'
          },
          {
            question: 'What is the unit of magnetic flux?',
            options: ['Weber', 'Tesla', 'Ampere', 'Volt'],
            correctAnswer: 'Weber'
          },
          {
            question: 'What is the value of Planck’s constant?',
            options: ['6.626 × 10^-34 J·s', '3 × 10^8 m/s', '1.602 × 10^-19 C', '9.8 m/s^2'],
            correctAnswer: '6.626 × 10^-34 J·s'
          },
          {
            question: 'What is the phenomenon where two waves superpose to form a resultant wave?',
            options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
            correctAnswer: 'Interference'
          },
          {
            question: 'What is the main difference between AC and DC?',
            options: ['AC is alternating current, DC is direct current', 'AC flows in one direction, DC alternates direction', 'AC is used in batteries, DC is used in homes', 'None of the above'],
            correctAnswer: 'AC is alternating current, DC is direct current'
          },
          {
            question: 'What is the device used to measure electric current?',
            options: ['Voltmeter', 'Ammeter', 'Ohmmeter', 'Wattmeter'],
            correctAnswer: 'Ammeter'
          },
          {
            question: 'What is the process of splitting a heavy nucleus into two lighter nuclei?',
            options: ['Fusion', 'Fission', 'Decay', 'Ionization'],
            correctAnswer: 'Fission'
          }
        ]
      },
      
      {
        domain: 'Chemistry',
        level: 'secondary',
        questions: [
          {
            question: 'What is the chemical symbol for water?',
            options: ['H2O', 'CO2', 'O2', 'NaCl'],
            correctAnswer: 'H2O'
          },
          {
            question: 'What is the atomic number of carbon?',
            options: ['6', '12', '14', '16'],
            correctAnswer: '6'
          },
          {
            question: 'Which element is known as the "King of Chemicals"?',
            options: ['Oxygen', 'Sulfur', 'Hydrogen', 'Carbon'],
            correctAnswer: 'Sulfur'
          },
          {
            question: 'What is the chemical formula for table salt?',
            options: ['NaCl', 'KCl', 'CaCl2', 'Na2SO4'],
            correctAnswer: 'NaCl'
          },
          {
            question: 'Which gas is most abundant in the Earth’s atmosphere?',
            options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
            correctAnswer: 'Nitrogen'
          },
          {
            question: 'What is the pH of a neutral solution?',
            options: ['0', '7', '14', '1'],
            correctAnswer: '7'
          },
          {
            question: 'Which element has the highest melting point?',
            options: ['Iron', 'Tungsten', 'Gold', 'Silver'],
            correctAnswer: 'Tungsten'
          },
          {
            question: 'What is the chemical symbol for gold?',
            options: ['Au', 'Ag', 'Pb', 'Fe'],
            correctAnswer: 'Au'
          },
          {
            question: 'What type of bond involves the sharing of electron pairs between atoms?',
            options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
            correctAnswer: 'Covalent bond'
          },
          {
            question: 'Which element is a noble gas?',
            options: ['Nitrogen', 'Oxygen', 'Argon', 'Chlorine'],
            correctAnswer: 'Argon'
          },
          {
            question: 'What is the molar mass of water (H2O)?',
            options: ['18 g/mol', '20 g/mol', '22 g/mol', '24 g/mol'],
            correctAnswer: '18 g/mol'
          },
          {
            question: 'Which element is liquid at room temperature?',
            options: ['Mercury', 'Bromine', 'Both', 'None'],
            correctAnswer: 'Both'
          },
          {
            question: 'What is the main component of natural gas?',
            options: ['Ethane', 'Propane', 'Methane', 'Butane'],
            correctAnswer: 'Methane'
          },
          {
            question: 'What is the charge of a proton?',
            options: ['+1', '-1', '0', '+2'],
            correctAnswer: '+1'
          },
          {
            question: 'Which element is the lightest?',
            options: ['Helium', 'Hydrogen', 'Lithium', 'Beryllium'],
            correctAnswer: 'Hydrogen'
          },
          {
            question: 'What is the common name for dihydrogen monoxide?',
            options: ['Salt', 'Water', 'Sugar', 'Carbon dioxide'],
            correctAnswer: 'Water'
          },
          {
            question: 'What is the most electronegative element?',
            options: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'],
            correctAnswer: 'Fluorine'
          },
          {
            question: 'What is the chemical formula for methane?',
            options: ['CH4', 'C2H6', 'C3H8', 'C4H10'],
            correctAnswer: 'CH4'
          },
          {
            question: 'Which element has the chemical symbol Fe?',
            options: ['Lead', 'Iron', 'Gold', 'Silver'],
            correctAnswer: 'Iron'
          },
          {
            question: 'What type of reaction is represented by A + B -> AB?',
            options: ['Decomposition', 'Single displacement', 'Double displacement', 'Synthesis'],
            correctAnswer: 'Synthesis'
          },
          {
            question: 'Which substance is known as the universal solvent?',
            options: ['Alcohol', 'Acetone', 'Water', 'Ether'],
            correctAnswer: 'Water'
          },
          {
            question: 'What is the process of solid turning directly into gas called?',
            options: ['Melting', 'Condensation', 'Sublimation', 'Evaporation'],
            correctAnswer: 'Sublimation'
          },
          {
            question: 'What is the formula for calculating the number of moles?',
            options: ['Mass / Molar mass', 'Volume / Molar volume', 'Concentration / Molarity', 'Pressure / Temperature'],
            correctAnswer: 'Mass / Molar mass'
          },
          {
            question: 'Which element has the atomic number 1?',
            options: ['Helium', 'Oxygen', 'Hydrogen', 'Carbon'],
            correctAnswer: 'Hydrogen'
          },
          {
            question: 'What is the primary gas found in Earth’s ozone layer?',
            options: ['O2', 'O3', 'CO2', 'N2'],
            correctAnswer: 'O3'
          },
          {
            question: 'Which element is commonly used in batteries?',
            options: ['Iron', 'Copper', 'Lithium', 'Zinc'],
            correctAnswer: 'Lithium'
          },
          {
            question: 'What is the chemical symbol for potassium?',
            options: ['P', 'K', 'Pt', 'Po'],
            correctAnswer: 'K'
          },
          {
            question: 'What is the main constituent of limestone?',
            options: ['Calcium sulfate', 'Calcium carbonate', 'Calcium oxide', 'Calcium nitrate'],
            correctAnswer: 'Calcium carbonate'
          },
          {
            question: 'What is the main gas responsible for the greenhouse effect?',
            options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Methane'],
            correctAnswer: 'Carbon dioxide'
          },
          {
            question: 'What is the name of the compound with the formula HCl?',
            options: ['Hydrogen chloride', 'Hydrochloric acid', 'Both', 'None'],
            correctAnswer: 'Both'
          }
        ]
      },
      {
        domain: 'Biology',
        level: 'secondary',
        questions: [
          {
            question: 'Which part of the cell contains the genetic material?',
            options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
            correctAnswer: 'Nucleus'
          },
          {
            question: 'What process do plants use to convert sunlight into food?',
            options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Fermentation'],
            correctAnswer: 'Photosynthesis'
          },
          {
            question: 'What is the powerhouse of the cell?',
            options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Lysosome'],
            correctAnswer: 'Mitochondria'
          },
          {
            question: 'What type of organism is capable of photosynthesis?',
            options: ['Animals', 'Fungi', 'Plants', 'Bacteria'],
            correctAnswer: 'Plants'
          },
          {
            question: 'What is the main function of red blood cells?',
            options: ['Fight infections', 'Carry oxygen', 'Clot blood', 'Produce hormones'],
            correctAnswer: 'Carry oxygen'
          },
          {
            question: 'Which part of the plant is responsible for water absorption?',
            options: ['Leaf', 'Stem', 'Root', 'Flower'],
            correctAnswer: 'Root'
          },
          {
            question: 'What is the basic unit of life?',
            options: ['Tissue', 'Organ', 'Cell', 'Organ system'],
            correctAnswer: 'Cell'
          },
          {
            question: 'Which organ is primarily responsible for filtering blood?',
            options: ['Liver', 'Heart', 'Kidney', 'Lungs'],
            correctAnswer: 'Kidney'
          },
          {
            question: 'What type of macromolecule are enzymes?',
            options: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'],
            correctAnswer: 'Proteins'
          },
          {
            question: 'What is the term for a change in an organism’s DNA?',
            options: ['Mutation', 'Replication', 'Transcription', 'Translation'],
            correctAnswer: 'Mutation'
          },
          {
            question: 'What is the name of the process by which cells divide?',
            options: ['Meiosis', 'Mitosis', 'Fission', 'Fusion'],
            correctAnswer: 'Mitosis'
          },
          {
            question: 'What is the main function of the ribosome?',
            options: ['Energy production', 'Protein synthesis', 'Lipid synthesis', 'DNA replication'],
            correctAnswer: 'Protein synthesis'
          },
          {
            question: 'What is the structural framework in the cytoplasm of the cell called?',
            options: ['Cell wall', 'Cytoskeleton', 'Cell membrane', 'Nucleoplasm'],
            correctAnswer: 'Cytoskeleton'
          },
          {
            question: 'Which organelle is responsible for producing ATP?',
            options: ['Nucleus', 'Endoplasmic reticulum', 'Mitochondria', 'Chloroplast'],
            correctAnswer: 'Mitochondria'
          },
          {
            question: 'What are the building blocks of proteins?',
            options: ['Monosaccharides', 'Fatty acids', 'Amino acids', 'Nucleotides'],
            correctAnswer: 'Amino acids'
          },
          {
            question: 'Which process involves the movement of water across a semi-permeable membrane?',
            options: ['Diffusion', 'Osmosis', 'Active transport', 'Facilitated diffusion'],
            correctAnswer: 'Osmosis'
          },
          {
            question: 'What is the name of the molecule that carries genetic information?',
            options: ['RNA', 'DNA', 'Protein', 'Lipid'],
            correctAnswer: 'DNA'
          },
          {
            question: 'Which part of the brain is responsible for coordination and balance?',
            options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Hypothalamus'],
            correctAnswer: 'Cerebellum'
          },
          {
            question: 'What is the name of the fluid that fills the cell?',
            options: ['Plasma', 'Cytoplasm', 'Nucleoplasm', 'Lymph'],
            correctAnswer: 'Cytoplasm'
          },
          {
            question: 'Which type of RNA carries amino acids to the ribosome?',
            options: ['mRNA', 'tRNA', 'rRNA', 'snRNA'],
            correctAnswer: 'tRNA'
          },
          {
            question: 'Which organ system is responsible for transporting nutrients and oxygen to cells?',
            options: ['Respiratory system', 'Digestive system', 'Circulatory system', 'Nervous system'],
            correctAnswer: 'Circulatory system'
          },
          {
            question: 'What is the main purpose of the immune system?',
            options: ['Transport oxygen', 'Remove waste', 'Defend against pathogens', 'Produce hormones'],
            correctAnswer: 'Defend against pathogens'
          },
          {
            question: 'Which molecule is the main energy currency in cells?',
            options: ['ADP', 'ATP', 'NADH', 'FADH2'],
            correctAnswer: 'ATP'
          },
          {
            question: 'What is the process by which organisms maintain a stable internal environment?',
            options: ['Homeostasis', 'Metabolism', 'Photosynthesis', 'Cell respiration'],
            correctAnswer: 'Homeostasis'
          },
          {
            question: 'What is the primary site of gas exchange in the human body?',
            options: ['Bronchi', 'Alveoli', 'Trachea', 'Larynx'],
            correctAnswer: 'Alveoli'
          },
          {
            question: 'What is the process by which cells obtain energy from glucose?',
            options: ['Photosynthesis', 'Cell respiration', 'Fermentation', 'Glycolysis'],
            correctAnswer: 'Cell respiration'
          },
          {
            question: 'Which type of cell division results in four daughter cells?',
            options: ['Binary fission', 'Mitosis', 'Meiosis', 'Budding'],
            correctAnswer: 'Meiosis'
          },
          {
            question: 'What are the chemical building blocks of DNA?',
            options: ['Nucleotides', 'Amino acids', 'Fatty acids', 'Monosaccharides'],
            correctAnswer: 'Nucleotides'
          },
          {
            question: 'What is the primary function of white blood cells?',
            options: ['Transport oxygen', 'Clot blood', 'Fight infections', 'Store energy'],
            correctAnswer: 'Fight infections'
          },
          {
            question: 'What is the term for the variety of life in the world or in a particular habitat?',
            options: ['Ecology', 'Biodiversity', 'Biome', 'Ecosystem'],
            correctAnswer: 'Biodiversity'
          }
        ]
      }
      
    ];

    for (const exam of exams) {
        try{
           const createdExam=await this.examService.createExam(exam); 
           
            if(createdExam){
              await this.examService.generateExam(exam.domain,exam.level); 
            }
          
        }catch(error){
          console.log("error",error.sqlMessage)
        }
        
      
    }
  }
}
