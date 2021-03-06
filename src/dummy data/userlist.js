import Years from "react-calendar/dist/umd/DecadeView/Years";



let stacyAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Skull&eyeType=Side&eyebrowType=Default&mouthType=Concerned&skinColor=Yellow'
let maryAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=Blank&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Dizzy&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Brown';
let michaelAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Wayfarers&hatColor=Gray02&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=Default&mouthType=Grimace&skinColor=DarkBrown';
let kyleAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Round&hatColor=Black&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=EyeRoll&eyebrowType=UpDown&mouthType=ScreamOpen&skinColor=Light'
let kevinAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Close&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Brown'
let jordanAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=DarkBrown'
let amaliaAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=PastelBlue&eyeType=EyeRoll&eyebrowType=UpDown&mouthType=Smile&skinColor=Light'
let eddieAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=Angry&mouthType=Sad&skinColor=DarkBrown'
let julieAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Red&facialHairType=Blank&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=PastelGreen&graphicType=Cumbia&eyeType=WinkWacky&eyebrowType=RaisedExcited&mouthType=Serious&skinColor=Light'

let jakeAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=SilverGray&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Heather&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Brown'

let tomAvatar = 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Blank&hatColor=Heather&facialHairType=Blank&clotheType=BlazerShirt&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=Eating&skinColor=Light'
let dunbaAvi = 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Black'
const cbsUsersList = [
    { firstName: 'Stacy', lastName: 'Rashford', avi: stacyAvatar, online: false, userID: 'stacyrashford' },


    { firstName: 'Mary', lastName: ' Jones', avi: maryAvatar, online: false, userID: 'maryjones' },
    { firstName: 'Michael', lastName: ' Scott', avi: michaelAvatar, online: true, userID: 'michaelscott' },

    { firstName: 'Kyle', lastName: ' Martinez', avi: kyleAvatar, online: true, userID: 'kylemartinez' },

    { firstName: 'Kevin', lastName: ' Parker', avi: kevinAvatar, online: false, userID: 'kevinparker' },


    { firstName: 'Jordan', lastName: ' Freiman', avi: jordanAvatar, online: false, userID: 'jordanfreiman' },


    { firstName: 'Amalia', lastName: ' Nunez', avi: amaliaAvatar, online: true, userID: 'amalianunez' },


    { firstName: 'Tom', lastName: ' Hoernberger', avi: tomAvatar, online: true, userID: 'tomhoernberger' },

    { firstName: 'Eddie', lastName: ' Baker', avi: eddieAvatar, online: false, userID: 'eddiebaker' },
    { firstName: 'Julie', lastName: ' Minamino', avi: julieAvatar, online: true, userID: 'julieminamino' },
    { firstName: 'Jake', lastName: ' Browning', avi: jakeAvatar, online: true, userID: 'jakebrowning' },
    {
        firstName: 'Dunba', lastName: 'Tehinse',
        avi: dunbaAvi,
        online: true,
        userID: 'dunbatehinse',
        loggedInUser: true
    }
]

export default cbsUsersList
