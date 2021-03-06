import cbsUsersList from "./userlist";
import db from '../firebase-config'
import { collection, getDoc } from '@firebase/firestore'

const reqRef = collection(db, "requestsList");








let fullDate = new Date()
let sameDay = new Date(fullDate)
const yesterday = sameDay.setDate(sameDay.getTime() - (24 * 60 * 60 * 1000));
const tomorrow = sameDay.setDate(sameDay.getTime() + (24 * 60 * 60 * 1000));



const requestData = [
    {
        type: 'Takedown',
        url: 'https://www.cbsnews.com/video/preview-indivisible-healing-hate/#x',
        deadline: fullDate,
        poster: cbsUsersList[0],
        show: "Special",
        showid: 'specials',
        rqid: 'takedownreq1'
    },
    {
        type: 'Takedown',
        url: 'https://www.cbsnews.com/video/apple-airtags-spark-safety-and-privacy-concerns/#x',
        deadline: fullDate,
        poster: cbsUsersList[1],
        show: "CBSN",
        showid: 'cbsn',
        rqid: 'takedownreq2'



    },
    {
        type: 'Takedown',
        url: 'https://www.cbsnews.com/video/country-on-high-alert-one-month-before-winter-olympics/',
        deadline: fullDate,
        poster: cbsUsersList[2],
        senderID: 123456,
        show: "CBS Mornings",
        showid: 'cbsmornings',
        rqid: 'takedownreq3'


    },
    {
        type: 'Takedown',
        url: 'https://www.cbsnews.com/video/thousands-of-schools-nationwide-get-creative-to-keep-kids-safe-in-class-despite-latest-covid-surge/',
        deadline: fullDate,
        poster: cbsUsersList[1],
        show: "CBS Mornings",
        showid: 'cbsmornings',
        rqid: 'takedownreq4'



    },
    {
        type: 'Upload',
        deadline: fullDate,
        opened: false,
        mos: 'XDF123MSA',
        thumbnail: null,
        url: null,
        poster: cbsUsersList[3],
        showid: 'redandblue',
        rqid: 'uploadreq1',
        show: "Red and Blue",
        hed: "Eye Opener: CDCs COVID isolation guidelines raise questions",
        shorthed: "Eye Opener: CDC guidelines raise questions",
        dek: "There are growing questions about a change to the CDC???s COVID isolation guidelines, as Omicron drives record case numbers. Also, tributes are pouring in for former Senate Majority Leader Harry Reid, who died at 82 Tuesday, and for legendary football coach and broadcaster John Madden, who died Tuesday at 85. All that and all that matters in today???s Eye Opener."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        opened: false,
        attachments: null,
        postID: 2,
        timesubmitted: null,
        started: true,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: null,
        showColor: "FFFF99",
        thumbnail: null,
        url: null,
        linkdata: "X1XXBBB402",
        poster: cbsUsersList[4],
        showid: 'cbsmornings',
        rqid: 'uploadreq2',
        show: "CBS Mornings",
        hed: "Dr. Walensky on CDC's new COVID guidelines",
        shorthed: "Dr. Walensky on CDC's new COVID guidelines",
        dek: "CDC Director Dr. Rochelle Walensky joins \"CBS Mornings\" to discuss why the agency issued new COVID-19 isolation and quarantine guidelines."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        opened: false,
        attachments: '1229_SatMO_XDSZ123MO.mov',
        timesubmitted: null,
        started: false,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: null,
        thumbnail: null,
        url: null,
        linkdata: "XXXB2BB402",
        showid: 'cbssaturdaymorning',
        poster: cbsUsersList[5],
        rqid: 'uploadreq3',
        show: "CBS Saturday Morning",
        hed: "Holiday shopping increased despite inflation",
        shorthed: "Holiday shopping increased despite inflation",
        dek: "Mastercard SpendingPulse found that holiday retail sales were up 8.5% in 2021. Meanwhile, the cost of essentials like food and energy continue to rise due to inflation. Business Insider senior reporter ??ine Cain joins CBSN's Elise Preston to explain."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        opened: false,
        attachments: null,
        timesubmitted: null,
        started: false,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: null,
        thumbnail: null,
        url: null,
        linkdata: "4XXXBBB402",
        poster: cbsUsersList[6],
        showid: 'cbseveningnews',
        rqid: 'uploadreq4',
        show: "CBS Evening News",
        hed: "Family seeks justice after LAPD shooting",
        shorthed: "Family seeks justice after LAPD shooting",
        dek: "The parents of the 14-year-old girl killed in a clothing store dressing room by a Los Angeles Police officer's stray bullet called for justice one day after police released video of the chaotic moments leading to the fatal shooting. Jonathan Vigliotti has the details."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        opened: true,
        attachments: null,
        postID: 1,
        timesubmitted: null,
        started: false,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: 'XDF123MSA',
        showColor: "FF6666",
        thumbnail: null,
        url: null,
        linkdata: "XXXBB5B400",
        poster: cbsUsersList[7],
        rqid: 'uploadreq5',
        showid: 'redandblue',
        show: "Red and Blue",
        hed: "Eye Opener: CDCs COVID isolation guidelines raise questions",
        shorthed: "Eye Opener: CDC guidelines raise questions",
        dek: "There are growing questions about a change to the CDC???s COVID isolation guidelines, as Omicron drives record case numbers. Also, tributes are pouring in for former Senate Majority Leader Harry Reid, who died at 82 Tuesday, and for legendary football coach and broadcaster John Madden, who died Tuesday at 85. All that and all that matters in today???s Eye Opener."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        flagged: true,
        opened: true,
        attachments: null,
        postID: 2,
        timesubmitted: null,
        started: true,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: null,
        showColor: "FFFF99",
        thumbnail: null,
        url: null,
        linkdata: "XXX6BBB402",
        poster: cbsUsersList[8],
        rqid: 'uploadreq6',
        show: "CBS Mornings",
        showid: 'cbsmornings',
        hed: "Dr. Walensky on CDC's new COVID guidelines",
        shorthed: "Dr. Walensky on CDC's new COVID guidelines",
        dek: "CDC Director Dr. Rochelle Walensky joins \"CBS Mornings\" to discuss why the agency issued new COVID-19 isolation and quarantine guidelines."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        opened: true,
        attachments: null,
        timesubmitted: null,
        started: false,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: null,
        showColor: "CCFF99",
        thumbnail: null,
        url: null,
        linkdata: "XXXBB7B402",
        poster: cbsUsersList[9],
        rqid: 'uploadreq7',
        showid: 'cbssaturdaymorning',
        show: "CBS Saturday Morning",
        hed: "Holiday shopping increased despite inflation",
        shorthed: "Holiday shopping increased despite inflation",
        dek: "Mastercard SpendingPulse found that holiday retail sales were up 8.5% in 2021. Meanwhile, the cost of essentials like food and energy continue to rise due to inflation. Business Insider senior reporter ??ine Cain joins CBSN's Elise Preston to explain."
    },
    {
        type: 'Upload',
        deadline: fullDate,
        flagged: true,
        opened: true,
        attachments: null,
        timesubmitted: null,
        started: true,
        complete: false,
        receiverName: null,
        receiverID: null,
        mos: null,
        showColor: "99CCFF",
        thumbnail: null,
        url: null,
        linkdata: "XXXBB8B402",
        poster: cbsUsersList[10],
        showid: 'cbseveningnews',
        rqid: 'uploadreq8',
        senderID: 113253,
        show: "CBS Evening News",
        hed: "Family seeks justice after LAPD shooting",
        shorthed: "Family seeks justice after LAPD shooting",
        dek: "The parents of the 14-year-old girl killed in a clothing store dressing room by a Los Angeles Police officer's stray bullet called for justice one day after police released video of the chaotic moments leading to the fatal shooting. Jonathan Vigliotti has the details."
    },

]
export default requestData