const quizData = [
  {
    question: "Which of the following is a vector-based design software?",
    options: ["Photoshop", "CorelDRAW", "GIMP", "Adobe Lightroom"],
    correctAnswer: "CorelDRAW",
  },
  {
    question: "What is the purpose of typography in design?",
    options: [
      "To create 3D effects",
      "To arrange text for readability and visual appeal",
      "To enhance image resolution",
      "To apply color gradients"
    ],
    correctAnswer: "To arrange text for readability and visual appeal",
  },
  {
    question: "Which color model is primarily used for print design?",
    options: ["RGB", "CMYK", "HEX", "HSB"],
    correctAnswer: "CMYK",
  },
  // {
  //   question: "What does kerning adjust in typography?",
  //   options: [
  //     "The vertical spacing between lines of text",
  //     "The horizontal space between characters",
  //     "The size of the text",
  //     "The font weight"
  //   ],
  //   correctAnswer: "The horizontal space between characters",
  // },
  {
    question: "Which tool in Photoshop is used to remove blemishes from an image?",
    options: [
      "Clone Stamp Tool",
      "Healing Brush Tool",
      "Crop Tool",
      "Blur Tool"
    ],
    correctAnswer: "Healing Brush Tool",
  },
  {
    question: "What is the primary difference between raster and vector graphics?",
    options: [
      "Raster is scalable without quality loss, vector is not",
      "Vector uses pixels, raster uses paths",
      "Raster uses pixels, vector uses paths",
      "They are both resolution-independent"
    ],
    correctAnswer: "Raster uses pixels, vector uses paths",
  },
  {
    question: "Which of the following is NOT a principle of design?",
    options: ["Balance", "Contrast", "Harmony", "Cropping"],
    correctAnswer: "Cropping",
  },
  {
    question: "What does DPI stand for in printing?",
    options: [
      "Dots Per Inch",
      "Design Per Inch",
      "Depth Per Image",
      "Digital Print Integration",
    ],
    correctAnswer: "Dots Per Inch",
  },
  {
    question: "Which software is best suited for photo editing?",
    options: ["CorelDRAW", "Adobe Photoshop", "Adobe Illustrator", "Sketch"],
    correctAnswer: "Adobe Photoshop",
  },
  {
    question: "Which color theory term refers to colors opposite each other on the color wheel?",
    options: [
      "Analogous colors",
      "Complementary colors",
      "Monochromatic colors",
      "Triadic colors"
    ],
    correctAnswer: "Complementary colors",
  },

  // Introduction to Graphic Design
  {
    question: "What is the primary goal of graphic design?",
    options: ["To write computer code",
      "To entertain with videos",
      "To communicate visual messages effectively",
      "To decorate with random images"
    ],
    correctAnswer: "To communicate visual messages effectively",
  },

  {
    question: "Which of the following is NOT a type of graphic design?",
    options: ["UI/UX Design", "Logo Design", "Editorial Design", "Rocket Engineering"],
    correctAnswer: "Rocket Engineering",
  },

  {
    question: "A graphic designer typically works with:",
    options: ["Data charts only",
      "Audio files only",
      "Visual elements like text, color, and images",
      "Mathematical equations"],
    correctAnswer: "Visual elements like text, color, and images",
  },
  {
    question: "Which of these is considered a raster graphics software ?",
    options: ["CorelDRAW", "Photoshop", "Notepad++", "AutoCAD"],
    correctAnswer: "Photoshop",
  },
  {
    question: "CorelDRAW is best known for creating:",
    options: ["Video edits", "Vector graphics", "Audio effects", "HTML code"],
    correctAnswer: "Vector graphics",
  },
  {
    question: "The file extension for CorelDRAW project files is:",
    options: [".psd", ".cdr", ".jpg", ".ai"],
    correctAnswer: ".cdr",
  },
  {
    question: "Which tool in CorelDRAW is used to bend lines or objects ?",
    options: ["Pick Tool", "Shape Tool", "Freehand Tool", "Zoom Tool"],
    correctAnswer: "Shape Tool",
  },
  {
    question: "To resize an object proportionally in CorelDRAW, you must:",
    options: ["Press Alt", "Press Ctrl", "Hold Shift while dragging", "Hold Shift + Ctrl"],
    correctAnswer: "Hold Shift + Ctrl",
  },
  {
    question: "Which of the following is NOT a drawing tool in CorelDRAW ?",
    options: ["Bezier Tool", "Pen Tool", "Knife Tool", "Smudge Tool"],
    correctAnswer: "Smudge Tool",
  },
  {
    question: "Photoshop is a:",
    options: ["Spreadsheet software",
      "Raster - based image editor",
      "Vector - based 3D modeler",
      "Text - only design tool"],
    correctAnswer: "Raster - based image editor",
  },
  {
    question: "The shortcut to duplicate a layer in Photoshop is:",

    options: ["Ctrl + C", "Ctrl + D", "Ctrl + J", "Ctrl + Shift + N"],
    correctAnswer: "Ctrl + J",
  },
  {
    question: "What does the Layers panel do in Photoshop ?",
    options: ["Controls internet access", "Helps play animations",
      "Manages text documents", "Organizes design elements on top of each other"],
    correctAnswer: "Organizes design elements on top of each other",
  },
  {
    question: "Which tool removes blemishes or unwanted objects in a photo?",
    options: ["Move Tool", "Spot Healing Brush Tool", "Zoom Tool", "Rectangle Tool"],
    correctAnswer: "Spot Healing Brush Tool",
  },
  {
    question: "The term non - destructive editing in Photoshop refers to:",
    options: ["Editing directly on the original image",
      "Editing without saving",
      "Editing using Smart Objects and Adjustment Layers",
      "Using the Eraser Tool"],
    correctAnswer: "Editing using Smart Objects and Adjustment Layers",
  },
  {
    question: "What are the primary colors in design ?",
    options: ["Green, Red, Blue",
      "Red, Yellow, Blue",
      "Cyan, Magenta, Yellow",
      "Orange, Purple, Green"],
    correctAnswer: "Red, Yellow, Blue",
  },
  {
    question: "Complementary colors are:",
    options: ["Next to each other on the color wheel",
      "Opposite each other on the color wheel",
      "Neutral tones",
      "Shades of the same color"],
    correctAnswer: "Opposite each other on the color wheel",
  },
  {
    question: "What does RGB stand for?",
    options: ["Red Green Black",
      "Royal Grey Brown",
      "Red Green Blue",
      "Raster Graphic Box"],
    correctAnswer: "Red Green Blue",
  },

  {
    question: "Which color mode is used for print ?",
    options: ["RGB", "HSL", "CMYK", "Greyscale"],
    correctAnswer: "CMYK",
  },

  {
    question: "What is the result of mixing two primary colors?",
    options: ["White", "Secondary Color", "Primary Color", "Tertiary Color"],
    correctAnswer: "Secondary Color",
  },
  {
    question: "Typography deals with:",
    options: ["Image compression", "Use of animations", "Style and appearance of text", "3D rendering"],
    correctAnswer: "Style and appearance of text",
  },
  {
    question: "Serif fonts are best described as:",
    options: ["Fonts with extra strokes at the edges",
      "Fonts used only for code",
      "Fonts made from images",
      "Fonts used only in cartoons"],
    correctAnswer: "Fonts with extra strokes at the edges",
  },
  {
    question: "Which of the following is a common Sans - Serif font ?",
    options: ["Times New Roman", "Garamond",
      "Arial", "Georgia"],
    correctAnswer: "Arial",
  },
  {
    question: "What does kerning refer to in typography ?",
    options: ["Space between lines of text",
      "Color of the text",
      "Space between two letters",
      "Width of the font"],
    correctAnswer: "Space between two letters",
  },
  // {
  //   question: "The height of lowercase letters is referred to as:",
  //   options: ["Capital Height", "Baseline",
  //     "X - height", "Font - weight"],
  //   correctAnswer: "Baseline",
  // },
  {
    question: "The arrangement of elements to guide the viewer’s eye is called:",
    options: ["Proximity", "Hierarchy", "Alignment", "Resolution"],
    correctAnswer: "Hierarchy",
  },
  {
    question: "Which principle of design refers to equal visual weight ?",
    options: ["Emphasis", "Repetition", "Balance", "Contrast"],
    correctAnswer: "Balance",
  },
  {
    question: "What is a mockup in design ?",
    options: ["A code compiler",
      "A random sketch",
      "A visual representation of a design idea",
      "A final print copy"],
    correctAnswer: "A visual representation of a design idea",
  },
  {
    question: "DPI stands for:",
    options: ["Dots Per Inch", "Design Per Item",
      "Data Per Interval", "Display Page Index"],
    correctAnswer: "Dots Per Inch",
  },
  {
    question: "White space in design is:",
    options: ["Wasted space", "Unused blank area that creates focus",
      "Area for adding more text",
      "Only used in black and white projects"],
    correctAnswer: "Area for adding more text",
  },
  {
    question: "A good design must:",
    options: ["Use as many fonts as possible",
      "Be complex and difficult to read",
      "Communicate clearly and effectively",
      "Focus only on aesthetics"],
    correctAnswer: "Communicate clearly and effectively",
  },
  {
    question: "What does the PowerClip feature in CorelDRAW allow you to do?",
    options: ["Add sound effects",
      "Insert a graphic inside another shape",
      "Draw using pen pressure",
      "Export to video"],
    correctAnswer: "Insert a graphic inside another shape",
  },
  {
    question: "Which paper size is the biggest from the options?",
    options: ["A1", "A3", "A4", "A5"],
    correctAnswer: "A1"
  },
  {
    question: "Which measurement size is the biggest from the options?",
    options: ["inch", "cm", "feet", "mm"],
    correctAnswer: "mm"
  },
  {
    question: "Which tool is used in CorelDRAW to convert an object to curves ?",
    options: ["Pick Tool", "Convert Tool", "Shape Tool", "Weld Tool"],
    correctAnswer: "Shape Tool",
  },
  {
    question: "What does the Weld command do in CorelDRAW ?",
    options: ["Splits two objects",
      "Groups text and images",
      "Joins selected objects into one",
      "Adds a blur effect"],
    correctAnswer: "Joins selected objects into one",
  },
  {
    question: "The shortcut key for saving a CorelDRAW file is:",
    options: ["Ctrl + S", "Alt + S", "Shift + S", "Ctrl + Alt + S"],
    correctAnswer: "Ctrl + S",
  },
  {
    question: "Which menu in CorelDRAW contains the Align and Distribute tools?",
    options: ["View", "Layout", "Arrange", "Tools"],
    correctAnswer: "Arrange",
  },
  {
    question: "What is the purpose of the Clone Stamp Tool in Photoshop ?",
    options: ["To clone layers",
      "To apply patterns",
      "To copy pixels from one area to another",
      "To crop an image"],
    correctAnswer: "To copy pixels from one area to another",
  },

  {
    question: "A PSD file is:",
    options: ["A video format", "A compressed image", "A Photoshop project file with layers", "An image without color"],
    correctAnswer: "A Photoshop project file with layers",
  },
  {
    question: "Adjustment Layers in Photoshop are used to:",
    options: ["Permanently change pixels",
      "Change layer order",
      "Apply effects without changing original image",
      "Lock the canvas"],
    correctAnswer: "Apply effects without changing original image",
  },
  {
    question: "The Quick Selection Tool helps to:",
    options: ["Cut the canvas",
      "Select similar areas based on color and texture",
      "Draw straight lines",
      "Apply filters"],
    correctAnswer: "Select similar areas based on color and texture",
  },
  {
    question: "To zoom into an image in Photoshop, the shortcut is:",
    options: ["Ctrl + Z", "Ctrl + +", "Alt + Shift", "Shift + M"],
    correctAnswer: "Ctrl + +",
  },
  {
    question: "Which of the following is a warm color?",
    options: ["Blue", "Purple", "Red", "Green"],
    correctAnswer: "Red",
  },
  {
    question: "A monochromatic color scheme uses:",
    options: ["Opposite colors",
      "Many random colors",
      "Different shades of one color",
      "Only black and white"],
    correctAnswer: "Different shades of one color",
  },
  {
    question: "Tints are made by adding _______ to a color.",
    options: ["White", "Black", "Blue", "Contrast"],
    correctAnswer: "White",
  },
  {
    question: "DPI is important in:",
    options: ["Video editing", "Printing quality", "Social media posting", "Motion graphics"],
    correctAnswer: "Printing quality",
  },
  {
    question: "Which of the following is a software used mainly for vector graphics?",
    options: ["Photoshop", "CorelDRAW", "Microsoft Word", "Canva"],
    correctAnswer: "CorelDRAW",
  },

  {
    question: "Raster images are made of:",
    options: ["Layers",
      "Points",
      "Pixel",
      "Curves"],
    correctAnswer: "Pixel",
  },
  {
    question: "What makes a good logo?",
    options: ["Complex design with lots of text",
      "Flashy and changing fonts",
      "Simplicity, scalability, and uniqueness",
      "Using as many colors as possible"],
    correctAnswer: "Simplicity, scalability, and uniqueness"
  },
  {
    question: "The principle of alignment helps:",
    options: ["Create randomness", "Balance elements on a page", "Blur objects", "Crop objects equally"],
    correctAnswer: "Balance elements on a page",
  },
  {
    question: "Which of these is a raster image file format?",
    options: [".svg", ".cdr", ".png", ".eps"],
    correctAnswer: ".png",
  },
  {
    question: "Mockups are useful for:",
    options: ["Coding web apps",
      "Showing final product previews to clients",
      "Compressing images",
      "Drawing in perspective"],
    correctAnswer: "Showing final product previews to clients",
  },
  {
    question: "The visual path that the eye follows in a design is called:",
    options: ["Resolution",
      "Focal Point",
      "Visual Hierarchy",
      "Flow"],
    correctAnswer: "Visual Hierarchy",
  },
  {
    question: "Which design principle helps show differences between elements?",
    options: ["Unity", "Proximity", "Contrast", "Rhythm"],
    correctAnswer: "Contrast",
  },
  {
    question: "A thumbnail sketch in design is:",
    options: ["A rough small draft idea",
      "A finished logo",
      "A color palette",
      "A pricing plan"],
    correctAnswer: "A rough small draft idea",
  },
  {
    question: "Which typography rule is correct for long paragraphs?",
    options: ["Use all caps",
      "Use cursive",
      "Use serif fonts for easier reading",
      "Use Comic Sans"],
    correctAnswer: "Use serif fonts for easier reading",
  },
  {
    question: "Which of the following is a decorative font style?",
    options: ["Arial", "Helvetica", "Lobster", "Times New Roman"],
    correctAnswer: "Lobster",
  },
  {
    question: "Tracking refers to:",
    options: ["Adjusting page margins",
      "Adding motion to text",
      "Spacing between all letters in a word",
      "The height of letters",
    ],
    correctAnswer: "Spacing between all letters in a word",
  },
  {
    question: "Which term refers to vertical spacing between lines of text?",
    options: ["Leading", "Kerning", "Tracking", "Padding"],
    correctAnswer: "Leading",
  },
  {
    question: "What is a typeface?",
    options: ["Another name for a printer",
      "A design style of a family of fonts",
      "A font effect",
      "A kind of cursor"],
    correctAnswer: "A design style of a family of fonts",
  },
  {
    question: "In color psychology, blue is commonly associated with:",
    options: ["Anger", "Energy", "Trust and Calmness", "Passion"],
    correctAnswer: "Trust and Calmness",
  },
  {
    question: "What is the opposite of saturation in color theory?",
    options: ["Vibrance", "Desaturation", "Contrast", "Brightness"],
    correctAnswer: "Desaturation",
  },

];
export default quizData;


