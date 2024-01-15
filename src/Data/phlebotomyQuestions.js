const phlebotomyQuestionsData = {
  category: "Medical",
  basicPhlebotomyProcedures: {
    venipuncture: {
      id: 1,
      question: "What are the key steps involved in performing a successful venipuncture?",
      answers: {
        a: "Insert the needle at a 90-degree angle, apply a tourniquet, and locate the vein.",
        b: "Begin by cleansing the site with alcohol, then insert the needle at a slight angle.",
        c: "Avoid using a tourniquet, insert the needle slowly, and release the tourniquet after drawing blood.",
        d: "Warm the patient's arm, choose a vein, and insert the needle swiftly at a 45-degree angle.",
      },
      correctAnswer: "b",
    },
    capillaryPuncture: {
      id: 2,
      question: "When is capillary puncture preferred over venipuncture?",
      answers: {
        a: "Capillary puncture is always preferred over venipuncture.",
        b: "When a large blood sample is required.",
        c: "In situations where venipuncture is less painful for the patient.",
        d: "Capillary puncture is never preferred in phlebotomy.",
      },
      correctAnswer: "c",
    },
    bloodCollectionTechniques: {
      id: 3,
      question: "Explain the differences between a straight needle and a butterfly needle.",
      answers: {
        a: "Straight needles are curved, while butterfly needles are straight.",
        b: "Straight needles are shorter, while butterfly needles are longer.",
        c: "Butterfly needles are used for venipuncture, while straight needles are used for capillary puncture.",
        d: "Straight needles are inserted at a 45-degree angle, while butterfly needles are inserted at a 90-degree angle.",
      },
      correctAnswer: "b",
    },
  },
  anatomyAndPhysiology: {
    circulatorySystem: {
      id: 4,
      question: "Describe the functions of the circulatory system in relation to phlebotomy.",
      answers: {
        a: "The circulatory system plays no role in phlebotomy.",
        b: "It transports blood, nutrients, and oxygen to cells and removes waste products.",
        c: "The circulatory system is only relevant in capillary puncture procedures.",
        d: "It functions solely to maintain body temperature during phlebotomy.",
      },
      correctAnswer: "b",
    },
    bloodComponents: {
      id: 5,
      question: "List the major components of blood and their functions.",
      answers: {
        a: "Blood components are irrelevant to phlebotomy.",
        b: "Major components include plasma, red blood cells, white blood cells, and platelets.",
        c: "Blood components consist only of red blood cells in phlebotomy procedures.",
        d: "There are no major components in blood relevant to phlebotomy.",
      },
      correctAnswer: "b",
    },
    veinsAndArteries: {
      id: 6,
      question: "Differentiate between veins and arteries.",
      answers: {
        a: "Veins carry oxygenated blood, while arteries carry deoxygenated blood.",
        b: "Veins have thicker walls than arteries.",
        c: "Arteries carry blood toward the heart, while veins carry blood away from the heart.",
        d: "Veins are always deeper in the body than arteries.",
      },
      correctAnswer: "c",
    },
  },
  safetyAndInfectionControl: {
    universalPrecautions: {
      id: 7,
      question: "Define universal precautions and their importance in phlebotomy.",
      answers: {
        a: "Universal precautions are unnecessary in phlebotomy.",
        b: "They involve taking extra precautions only when dealing with certain patients.",
        c: "Universal precautions are a set of guidelines to prevent the transmission of bloodborne pathogens.",
        d: "They are only important in capillary puncture procedures.",
      },
      correctAnswer: "c",
    },
    personalProtectiveEquipment: {
      id: 8,
      question: "List the essential PPE items for phlebotomy procedures.",
      answers: {
        a: "PPE is not required in phlebotomy.",
        b: "Essential items include gloves, gowns, and masks.",
        c: "PPE is only needed during venipuncture.",
        d: "Gloves are the only necessary PPE in phlebotomy.",
      },
      correctAnswer: "b",
    },
    handlingBiohazardousMaterials: {
      id: 9,
      question: "What precautions should be taken when handling biohazardous materials?",
      answers: {
        a: "No precautions are needed when handling biohazardous materials in phlebotomy.",
        b: "Handle biohazardous materials with bare hands to avoid contamination.",
        c: "Use appropriate protective equipment and follow proper disposal procedures.",
        d: "Biohazardous materials are not relevant to phlebotomy procedures.",
      },
      correctAnswer: "c",
    },
  },
  equipmentAndSupplies: {
    typesOfNeedles: {
      id: 10,
      question: "Differentiate between the various types of needles used in phlebotomy.",
      answers: {
        a: "There is only one type of needle used in phlebotomy.",
        b: "Different types include straight needles, butterfly needles, and safety needles.",
        c: "Needle types are irrelevant to phlebotomy procedures.",
        d: "Needles used in phlebotomy are all the same length and gauge.",
      },
      correctAnswer: "b",
    },
    tubesAndAdditives: {
      id: 11,
      question: "Explain the purpose of different color-coded tubes in blood collection.",
      answers: {
        a: "Color-coded tubes have no significance in blood collection.",
        b: "Different colors indicate different types of blood tests and additives.",
        c: "All tubes in blood collection are universally red in color.",
        d: "The color of blood collection tubes depends on the patient's preference.",
      },
      correctAnswer: "b",
    },
    bloodCollectionDevices: {
      id: 12,
      question: "Describe the use of tourniquets in blood collection.",
      answers: {
        a: "Tourniquets are not used in blood collection procedures.",
        b: "They are applied to reduce blood flow and make veins more visible.",
        c: "Tourniquets are only used in capillary puncture procedures.",
        d: "Veins should be avoided when using a tourniquet in blood collection.",
      },
      correctAnswer: "b",
    },
  },
};

export default phlebotomyQuestionsData;
