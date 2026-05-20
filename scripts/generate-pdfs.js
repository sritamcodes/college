const fs = require('fs');
const path = require('path');

const pdfContent = `%PDF-1.1
%¥±ë
1 0 obj
  << /Type /Catalog
     /Pages 2 0 R
  >>
endobj
2 0 obj
  << /Type /Pages
     /Kids [3 0 R]
     /Count 1
     /MediaBox [0 0 500 200]
  >>
endobj
3 0 obj
  <<  /Type /Page
      /Parent 2 0 R
      /Resources
       << /Font
           << /F1
               << /Type /Font
                  /Subtype /Type1
                  /BaseFont /Helvetica
               >>
           >>
       >>
      /Contents 4 0 R
  >>
endobj
4 0 obj
  << /Length 85 >>
stream
  BT
    /F1 24 Tf
    50 100 Td
    (Dummy Syllabus PDF for Testing) Tj
  ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000018 00000 n 
0000000077 00000 n 
0000000178 00000 n 
0000000460 00000 n 
trailer
  <<  /Root 1 0 R
      /Size 5
  >>
startxref
596
%%EOF`;

const courses = ['bca', 'bsc-itm', 'bsc-ds', 'bsc-cs'];
const semesters = [1, 2, 3, 4, 5, 6];

const baseDir = path.join(__dirname, '../public/syllabus');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

courses.forEach(course => {
  const courseDir = path.join(baseDir, course);
  if (!fs.existsSync(courseDir)) {
    fs.mkdirSync(courseDir, { recursive: true });
  }

  semesters.forEach(sem => {
    const filePath = path.join(courseDir, `sem${sem}.pdf`);
    fs.writeFileSync(filePath, pdfContent);
    console.log(`Created ${filePath}`);
  });
});

console.log('All dummy PDFs created successfully.');
