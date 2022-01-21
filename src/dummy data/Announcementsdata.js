import cbsUsersList from './userlist'
const todaysdate = new Date();

const AnnouncementsData = [
    {
        announcementid: '12345x',
        head: 'Changes to iDrop/FTP login',
        body: `Hey Guys- starting today, idrop will no longer be used! you will only be able to update the host for ftp in our remote computers (avid) please update host to
        Host- ftps://newsftp.cbs.ad.cbs.net
        Username - your username
        Password - your pw
        Port - 990
        for thumbnails and mp4s you can upload JPEGS to sony ci
        ** again you will no longer be able to access FTP from your laptops `,
        poster: cbsUsersList[10],
        timePosted: todaysdate,
        seenbyUser: false,
        usersSeen: [],
        urgent: false,
    },
    {
        announcementid: '123456d',
        head: 'Full Episodes numbering scheme for 2022',
        body: `Hello all (especially those working SatMo)!
I've been informed today by Seraphin from our West Coast team that SatMo full episodes will no longer have their old season/episode number scheme, but instead a yearly season and episode number just like CBS Evening News and SunMo.
Per Seraphin:
"Per @David McGoldrick sync with your team, it was agreed that Saturday Morning will revert to a yearly season and episode order just like Evening/Weekend News and Sunday Morning. So to my understanding, it should be Season 2022 Episode 0108 (whatever the date is). "
So moving forward, please list the season and episode number for SatMo full eps with the year and date, respectively, just as we have been doing for CBS Evening News.
Also, I've been asked to reiterate that we should pub update the data only publish options for full episodes once most of the metadata becomes established. Thank you`,
        poster: cbsUsersList[9],
        timePosted: todaysdate,
        seenbyUser: false,
        usersSeen: [],
        urgent: true
    },
    {
        announcementid: '123456e',
        head: 'CBS News ID Request Form',
        body: `Hi everyone,
To those who haven't yet - please don't forget to fill out the doc in Racquel's email  "2022 CBS News ID Request Form"
If you still haven't yet - please fill it out: https://docs.google.com/spreadsheets/d/1Ah6qAjyZczeJecXTn9gh56Y9EuQnPFVGK7naILAeBTQ/edit?usp=sharing
They need an address to mail your ID.
Thanks,`,
        poster: cbsUsersList[8],
        timePosted: todaysdate,
        seenbyUser: false,
        usersSeen: [],
        urgent: false,
    },
    {
        announcementid: '1234563f',
        head: 'Reminder - Season number changes for 2022',
        body: `Just a reminder for Ref ID’s that the season and episodes have been changed starting this year. The template is updated but just keep it in mind when creating IDs.
NOTE: If the EP / SEASON column is left BLANK that means that the episode is MMDD and the season is YYYY. Otherwise all others have the season number listed and episode number must be input. Please confirm you’ve seen this!`,
        poster: cbsUsersList[7],
        timePosted: todaysdate,
        seenbyUser: false,
        usersSeen: [],
        urgent: false
    },
    {
        announcementid: '12324fd',
        head: 'Reminder - Season number changes for 2022',
        body: `Just a reminder for Ref ID’s that the season and episodes have been changed starting this year. The template is updated but just keep it in mind when creating IDs.
NOTE: If the EP / SEASON column is left BLANK that means that the episode is MMDD and the season is YYYY. Otherwise all others have the season number listed and episode number must be input. Please confirm you’ve seen this!`,
        poster: cbsUsersList[6],
        timePosted: todaysdate,
        seenbyUser: false,
        usersSeen: [],
        urgent: false
    },
    {
        announcementid: '4598sdf',
        head: 'Fusion  Update 1/20',
        body: `Fusion will be going through a software update on 1/30/21 between the hours of 2 and 3pm. Please use revert to the AVID->MPX workflow during those hours if necessary`,
        poster: cbsUsersList[6],
        timePosted: todaysdate,
        seenbyUser: false,
        usersSeen: [],
        urgent: false
    },

]

export default AnnouncementsData