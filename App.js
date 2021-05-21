const nodemailer = require("nodemailer");
num = 0;

const SUBJECT = [
    "Study Week",
    "WE NEED A STUDY WEEK",
    "Study Week Proposal",
    "Study Week Petition",
    "Mental Health Week"
];

const INTRO = [
    "Good Morning Mr. Newman, <br /><br />",
    "Hello Mr. Newman, <br /><br />",
    "Greetings Mr. Newman, <br /><br />",
    "Hi Mr. Newman,<br /> <br />",
    "Dear Mr. Newman, <br /><br />",
    "Mr. Newman:<br /> <br />"
];

const PROBLEMA = [
    "It has come to our attention that you have recently rejected a proposal for study week.",
    "I heard from my peers that a popular study week petition was rejected lately.",
    "Our student body has recently proposed a study week for mental health wellbeing.",
    "I would like to formally demand that Brooklyn Tech hosts a study week starting Monday of next week.",
    "I believe a 2,000 signature petition for a study week was denied on the basis of 'tradition'",
    "The SGO has recently alerted us to the possibility of a study week."
];

const ESSENTIALS = [
    "This is absolutely unacceptable.",
    "This is beyond absurd.",
    "I am infuriated at the sight of this.",
    "We can do better.",
    "As the head of Brooklyn Tech, you have the authority to correct this action and make our petition happen.",
    "We need to start focusing on the mental health of our students.",
    "This came as a shock to us, especially because we have rallied such a majority for this petition."
];

const SOB_STORY = [
    "Ever since the start of the pandemic, our mental health has been declining rapidly.",
    "Remote Learning has taken a toll on all our mental health.",
    "I have APs, SATs, Teacher Reccomendation Letters, Exams, and Projects to worry about all next week.",
    "Many students have cried under the pressure of this institution.",
    "Students all across the school are crumbling under the immense stress BTHS has put on them.",
    "Me and my peers have consistently had MENTAL BREAKDOWNS in the middle of the night doing egrigious amounts of homework.",
    "The worst offenders of our mental health lies in the staff of this school - namely, health and gym teachers with their useless Edpuzzles that does nothing but bring stress to our lives."
];

const REASON = [
    "It's impossible to study for APs while focusing on the myriad of exams our unforgiving teachers have consistently churned out.",
    "A study week would allow BTHS students to focus on standardized testing without the additional stress of homework and clubs.",
    "Brooklyn Tech teachers refuse to acknowledge the stress of AP exams, and continue to hand out end-of-the-year exams.",
    "The workload before our AP exams are crushing. We need a study week to address this.",
    "The study week proposal would allow our students time to study for what is REALLY important for their futures - AP exams.",
    "It's impossible to study for the June SATs and APs while teachers give 2 hour long Edpuzzles and egrigious amounts of work and exams.",
    "It's impossible to study for AP exams when teaches force us to divert attention from College Board exams to their unforgiving end of the year exams that they judt WANT to cram in.",
    "Some teachers continue to assign homework and exams ON AP EXAM DAYS. This has to be banned and dealt with appropriately - which is what a mental health day would do.",
    "A mental health week would allow students to catch up on their work while giving them free time to focus on their mental wellbeing.",
    "A mental health week grants students the opportunity to pull themselves together and address their failing grades as well as AP exams."
];

const SEL = [
    "While we appreciate the SEL days, these don't help at all as the programs are mandatory.",
    "SEL day has done nothing to give students actual free time they could use for whatever they need to.",
    "SEL days have been awful at addressing mental health - especially because teachers assign exams and projects after SEL day. This forces students to further divert attention from AP exams.",
    "The SEL days do nothing to mitigate the stress caused by egrigious amounts of projects, homeworks, and exams before AP week.",
    "Mandatory SEL sessions and mandatory office hours leave students no free time to actually catch up on their work or mental health.",
    "SEL days are not enough. One day is not enough for us to recover."
];

const ENDING = [
    "We hope you'll reconsider your former decision on study week.",
    "Thus, we demand Brooklyn Tech give students a study week.",
    "Therefore, it would be in the best interest of the school's average AP grades, and the interest of the student, to give us a study week.",
    "A study week is a neccessity that we must implement."
];

const constructMessage = () => {
    let msg = "<html>";

    for (arr of [INTRO, PROBLEMA, ESSENTIALS, SOB_STORY, REASON, SEL, ENDING])
    {
        msg += arr[Math.floor(Math.random() * arr.length)] + " ";
    }

    msg += "We have seen that you gave a week of no homework. But that's not enough! We need a study week with no exams and projects either! <br /> <br /> Sincerely, <br /> The 2,000 Brooklyn Tech students who have signed the petition.</html>";
    return msg;
}

const spamNewman = () => {
    let tntYeeter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: "studyweekpls@gmail.com",
            pass: "TempMail123"
        }
    });
    
    tntYeeter.sendMail({
        from: "studyweekpls@gmail.com",
        to: "dnewman2@schools.nyc.gov",
        subject: SUBJECT[Math.floor(Math.random() * SUBJECT.length)],
        html: constructMessage()
    }, (err, data) => {
        if (err)
        {
            console.error(err);
        }
        else
        {
            num++;
            console.log(`Email #${num} sent!`);
        }
    });

    if (num < 500)
    {
        setTimeout(spamNewman, Math.random() * 600 + 400);   
    }
}

spamNewman();