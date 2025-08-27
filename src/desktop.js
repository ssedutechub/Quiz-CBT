const quizData = [
  {
    question:
      "The Components of Computer System are the following except _____",
    options: ["Software", "Peopleware", "Hardware", "Computerware"],
    correctAnswer: "Computerware",
  },
  {
    question: "Tables are made up of ______ and ______",
    options: [
      "Leg & Hand",
      "Wood & Glass",
      "Rows & Columns",
      "Header & Footer",
    ],
    correctAnswer: "Rows & Columns",
  },
  {
    question: "The following are input devices except _______",
    options: ["Printer", "Game Pad", "Keyboard", "Mouse"],
    correctAnswer: "Printer",
  },
  {
    question: "The shortcut key to select or highlight all is _____",
    options: ["Ctrl+A", "Ctrl+X", "Ctrl+E", "Ctrl+J"],
    correctAnswer: "Ctrl+A",
  },
  {
    question: "To center a selected text, the shortcut is",
    options: ["Ctrl+C", "Ctrl+E", "Ctrl+U", "Ctrl+O"],
    correctAnswer: "Ctrl+E",
  },
  {
    question: "MS Word is software of ______",
    options: ["Apple", "Android", "Google", "Microsoft"],
    correctAnswer: "Microsoft",
  },
  {
    question: "Which option is NOT found on the Menu bar of MS Word?",
    options: ["Insert", "Home", "Page Layout", "Print"],
    correctAnswer: "Print",
  },
  {
    question: "The boxes in MS Excel is called",
    options: ["Prison", "Cell", "Table", "Worksheet"],
    correctAnswer: "Cell",
  },
  {
    question: "The operator for Multiplication in MS Excel is",
    options: ["+", "x", "/", "*"],
    correctAnswer: "*",
  },
  {
    question: "In MS Excel, the operator ^ represent ______",
    options: ["Division", "Exponent", "Multiplication", "Addition"],
    correctAnswer: "Exponent",
  },
  {
    question: "Ctrl+Y is used to",
    options: ["Undo", "Redo", "Cut", "Save"],
    correctAnswer: "Redo",
  },
  {
    question: "Flash Drive is an example of",
    options: ["Software", "External Memory", "Internal Memory", "Input device"],
    correctAnswer: "External Memory",
  },
  {
    question: "________ can corrupt the computer system",
    options: ["Music", "Videos", "Virus", "Internet"],
    correctAnswer: "Virus",
  },
  {
    question: "In  MS Excel, Rows are identified with ______",
    options: ["Letters", "Numbers", "Cells", "Symbols"],
    correctAnswer: "Numbers",
  },
  {
    question: "In  MS Excel, Columns are identified with ______",
    options: ["Letters", "Numbers", "Cells", "Symbols"],
    correctAnswer: "Letters",
  },
  {
    question: "The name of a document on MS Word is found where?",
    options: ["Menu bar", "Tool bar", "Title bar", "Standard menu bar"],
    correctAnswer: "Title bar",
  },
  {
    question: "Mouse contains two button, _____ & ______",
    options: [
      "up click & down click",
      "Left click & Right click",
      "Point click & Drag click",
      "Cursor & Button",
    ],
    correctAnswer: "Left click & Right click",
  },
  {
    question: "Deleted items on a computer goes into",
    options: ["New Folder", "Music Folder", "Recycle Bin", "PC Folder"],
    correctAnswer: "Recycle Bin",
  },
  {
    question: "The following are examples of Hardware components except",
    options: ["Input unit", "Output unit", "Application unit", "System unit"],
    correctAnswer: "Application unit",
  },
  {
    question: "Which of the following is NOT on the home keys on a keyboard",
    options: ["A", "B", "D", "L"],
    correctAnswer: "B",
  },
  {
    question: "RAM means",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Random Allocated Memory",
      "Read Allocated Memory",
    ],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "Which shortcut key is used to paste?",
    options: ["Ctrl+P", "Ctrl+V", "Ctrl+A", "Ctrl+J"],
    correctAnswer: "Ctrl+V",
  },
  {
    question: "When typing, to delete a character, you use ______ key",
    options: ["Enter", "Shift", "Tab", "Backspace"],
    correctAnswer: "Backspace",
  },
  {
    question: "Excel Worksheet can also be called",
    options: ["Document", "Spreadsheet", "Workbook", "Notepad"],
    correctAnswer: "Spreadsheet",
  },
  {
    question: "File can be transfered from the Phone to Laptop using all EXCEPT _____",
    options: ["USB cord", "Ethernet cord", "Bluettooth", "Xender"],
    correctAnswer: "Ethernet cord",
  },
  {
    question: "Page orientation can either be ____ or _____",
    options: ["Vertical or Horizontal", "Up or Down", "Landscape or Portrait", "No idea"],
    correctAnswer: "Landscape or Portrait",
  },
  {
    question: "Which options shows Toggle case",
    options: ["SSEDUTECHUB", "Ssedutechub", "ssedutechub", "SeDuTeChUb"],
    correctAnswer: "SeDuTeChUb",
  },
  {
    question: "In Excel, cell A3 is located where",
    options: [
      "Row A column 3",
      "Row 3 Column A",
      "Row 1 Column 3",
      "Row 3 Coulmn 1",
    ],
    correctAnswer: "Row 3 Column A",
  },
  {
    question: "The best way to shut down a computer system is to ____",
    options: [
      "Remove the battery",
      "Use the power button",
      "Use the Start option",
      "I do not know",
    ],
    correctAnswer: "Use the Start option",
  },
  {
    question: "Which of the following is NOT a computer device",
    options: ["Calculator", "Laptop", "Mobile Phone", "Exercise Book"],
    correctAnswer: "Exercise Book",
  },
  {
    question: "When typing, which key takes the cursor to the next line?",
    options: ["Enter", "Shift", "Tab", "Caps lock"],
    correctAnswer: "Enter",
  },
  {
    question: "Which of the following is not a reason for using a computer?",
    options: ["Accuracy", "Speed", "Reliability", "Time wasting"],
    correctAnswer: "Time wasting",
  },
  {
    question:
      "Which of the follwing operation will give 10 when type in MS Excel?",
    options: ["=2*5", "2*5", "5+5", "20/2"],
    correctAnswer: "=2*5",
  },
  {
    question: "The follwing are Fonts except",
    options: ["Calibri", "Times New Roman", "Hand writing", "Arial Black"],
    correctAnswer: "Hand writing",
  },
  {
    question: "Upper Case means",
    options: [
      "Typing in small letters",
      "Typing in capital letters",
      "Typing in toggle case",
      "Typing in numbers",
    ],
    correctAnswer: "Typing in capital letters",
  },
  {
    question: "Lower Case means",
    options: [
      "Typing in small letters",
      "Typing in capital letters",
      "Typing in toggle case",
      "Typing in numbers",
    ],
    correctAnswer: "Typing in small letters",
  },
  {
    question: "Which menu on MS Word can the Shape tool be found?",
    options: ["Home", "Insert", "Design", "Page Layout"],
    correctAnswer: "Insert",
  },
  {
    question: "The file extension for MS Word document is",
    options: [".docx", ".xls", ".html", ".ppt"],
    correctAnswer: "docx",
  },
  {
    question: "Which Microsoft office package can act as a Calculator",
    options: ["MS Word", "MS Excel", "MS Powerpoint", "MS Access"],
    correctAnswer: "MS Excel",
  },
  {
    question:
      "To change the screen saver or wall paper, right click on the desktop view and go to _____",
    options: ["Display setting", "Personalise", "New", "I do not know"],
    correctAnswer: "Personalise",
  },
  {
    question:
      "The file extension for MS Powerpoint is ______ ",
    options: [".docx", ".doc", ".ppt", ".xlsx"],
    correctAnswer: ".ppt",
  },
   {
    question:
    "Which menu on powerpoint can make a shape Fly in?",
    options: ["insert", "Transition", "Animation", "Slide view"],
    correctAnswer: "Animation",
  },
  {
    question: "To begin a formula in Excel, it must start with ____ sign",
    options: ["+", ">", "?", "="],
    correctAnswer: "=",
  },
  {
    question: "In Excel, cell G10 is located where",
    options: [
      "Row G column 10",
      "Row 10 Column G",
      "Row 7 Column 10",
      "Row 10 Coulmn 7",
    ],
    correctAnswer: "Row 10 Column G",
  },
  {
    question: "Where can the Watermark tool be found in ms word?",
    options: ["Design", "Layout", "Insert", "Home"],
    correctAnswer: "Design",
  },
  {
    question: "Which of the following package can be convniently used to plot graphs?",
    options: ["Ms Word", "Ms Powerpoint", "Ms Excel", "Ms Access"],
    correctAnswer: "Ms Excel",
  },
  {
    question: "You want to prepare an application letter, which of this package will you use?",
    options: ["Ms Word", "Ms Powerpoint", "Ms Excel", "Ms Access"],
    correctAnswer: "Ms Word",
  },
  {
    question: "You want to prepare a presentation, which of this package will you use?",
    options: ["Ms Word", "Ms Powerpoint", "Ms Excel", "Ms Access"],
    correctAnswer: "Ms Powerpoint",
  },
  {
    question: "You want to prepare a spreadsheet, which of this package will you use?",
    options: ["Ms Word", "Ms Powerpoint", "Ms Excel", "Ms Access"],
    correctAnswer: "Ms Excel",
  },
  {
    question: "What short cut will you use to open a new slide on Ms Powerpoint?",
    options: ["ctrl+M", "ctrl+N", "ctrl+O", "No Idea"],
    correctAnswer: "ctrl+M",
  },
  {
    question: "Which formula will you use to calculate the Total from cell B2 to G2?",
    options: ["=sum(B2:G2)", "=sum(B2+G2)", "=Total(B2:G2)", "=Total(B2+G2)"],
    correctAnswer: "=sum(B2:G2)",
  },
    {
    question: "Which file extension is used for PowerPoint presentations?",
    options: [".docx", ".xlsx", ".pptx", ".txt"],
    correctAnswer: ".pptx"
  },
  {
    question: "In PowerPoint, each page is called a:",
    options: ["Slide", "Sheet", "Page", "Card"],
    correctAnswer: "Slide"
  },
  {
    question: "Which tab is used to change the design of a PowerPoint presentation?",
    options: ["Insert", "Design", "Animations", "View"],
    correctAnswer: "Design"
  },
  {
    question: "Which shortcut is used to start a slideshow from the beginning?",
    options: ["F5", "F7", "Shift + F5", "Ctrl + F5"],
    correctAnswer: "F5"
  },
  {
    question: "Which feature is used to apply movement to text and images in PowerPoint?",
    options: ["Animations", "Transitions", "Themes", "Layouts"],
    correctAnswer: "Animations"
  },
   {
    question: "In Excel, what is a cell?",
    options: ["The box where a row and column meet", "A type of formula", "A worksheet name", "A chart type"],
    correctAnswer: "The box where a row and column meet"
  },
  {
    question: "Which paper size is the biggest from the options?",
    options: ["A1", "A3", "A4", "A5"],
    correctAnswer: "A1"
  },
  {
    question: "Which file extension is used for Excel workbooks?",
    options: [".docx", ".xlsx", ".pptx", ".txt"],
    correctAnswer: ".xlsx"
  },
  {
    question: "Which function is used to add numbers in Excel?",
    options: ["ADD()", "TOTAL()", "SUM()", "PLUS()"],
    correctAnswer: "SUM()"
  },
  {
    question: "What does the AutoFill feature do in Excel?",
    options: ["Automatically fills a series of data", "Saves your work", "Deletes blank cells", "Opens new sheets"],
    correctAnswer: "Automatically fills a series of data"
  },
   {
    question: "Which tab in Microsoft Word contains font settings?",
    options: ["Home", "Insert", "Layout", "Review"],
    correctAnswer: "Home"
  },
  {
    question: "What is the default file extension for Word documents?",
    options: [".pdf", ".txt", ".docx", ".xls"],
    correctAnswer: ".docx"
  },
  {
    question: "Which shortcut is used to save a document?",
    options: ["Ctrl + S", "Ctrl + P", "Ctrl + A", "Ctrl + Z"],
    correctAnswer: "Ctrl + S"
  },
  {
    question: "Which option is used to check spelling in Word?",
    options: ["Spelling & Grammar", "Proofing", "Word Count", "Review"],
    correctAnswer: "Spelling & Grammar"
  },
  {
    question: "Which ribbon tab is used to insert pictures in Word?",
    options: ["Insert", "Design", "Layout", "Home"],
    correctAnswer: "Insert"
  },
    {
    question: "Which key combination is used to open File Explorer in Windows?",
    options: ["Windows + E", "Ctrl + E", "Alt + E", "Shift + E"],
    correctAnswer: "Windows + E"
  },
  {
    question: "In File Explorer, which option is used to create a new folder?",
    options: ["File → New → Folder", "Right-click → New → Folder", "Ctrl + N", "Insert → Folder"],
    correctAnswer: "Right-click → New → Folder"
  },
  // {
  //   question: "Which file extension is for a Word document?",
  //   options: [".pptx", ".xlsx", ".docx", ".jpg"],
  //   correctAnswer: ".docx"
  // },
  {
    question: "What is the purpose of the 'Recycle Bin'?",
    options: ["Store temporary files", "Store deleted files before permanent removal", "Store programs", "Increase storage size"],
    correctAnswer: "Store deleted files before permanent removal"
  },
  {
    question: "Which action is used to rename a file in File Explorer?",
    options: ["Right-click and select Rename", "Open and save", "Move to Documents", "Double-click the file"],
    correctAnswer: "Right-click and select Rename"
  },
   {
    question: "Which key combination is commonly used to copy text?",
    options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"],
    correctAnswer: "Ctrl + C"
  },
  {
    question: "Which part of the laptop controls the mouse pointer without using an external mouse?",
    options: ["Touchpad", "Keyboard", "Webcam", "Speakers"],
    correctAnswer: "Touchpad"
  },
  {
    question: "What is the function of the laptop's battery?",
    options: ["Store files", "Provide power when unplugged", "Increase speed", "Install software"],
    correctAnswer: "Provide power when unplugged"
  },
  {
    question: "Which button is used to turn on a laptop?",
    options: ["Shift", "Enter", "Power", "Tab"],
    correctAnswer: "Power"
  },
  {
    question: "Which key combination is used to paste copied content?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + X"],
    correctAnswer: "Ctrl + V"
  },
];
export default quizData;
