const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

let person = {
    profileImg: "profileImg.jpg",
    name: "Gaye",
    surname: "TEKIN",
    profession: "Computer Engineer - Full Stack .Net Developer",
    address: "Ankara, Turkiye",
    email: "gayemce4@gmail.com",
    phone: "+90 541 602 2536",
    myProfile: `<p class="profile_description">I graduated from Kastamonu University in July 2022 as an honor student with an average of 3.02. I work in C#, T-SQL, Html, Css, JavaScript and Web API Technologies.</p>`
}

let socialMedias = [
    {
        id:0,
        name: "@gayemce",
        link: "https://www.linkedin.com/in/gayemce/",
        icon: "bx bxl-linkedin-square social_icon"
    },
    {
        id:1,
        name: "@gayemce",
        link: "https://github.com/gayemce",
        icon: "bx bxl-github social_icon"
    },
    {
        id:2,
        name: "@gayemce",
        link: "https://medium.com/@gayemce",
        icon: "bx bxl-medium social_icon"
    }
]

let educations = [
    {
        id:0,
        title: "COMPUTER ENGINEERING",
        studies: "Kastamonu University",
        year: "2018-2022"
    },
    {
        id:1,
        title: "MACHİNE ENGINEERING",
        studies: "Gazi University",
        year: "2018-2022"
    }
    
]

let skills = [
    {
        id: 0,
        title: "C#"
    },
    {
        id:1,
        title: "CSS"
    },
    {
        id:2,
        title: "HTML"
    },
    {
        id:3,
        title: "Javascript"
    }
]

let workExperiences = [ 
    {
        id:0,
        title: "Eti Bakır A.Ş",
        yearSubtitle: "2022 | Intern Computer Engineer",
        description: "I gained experience in hardware installations and IP/TCP. I personally performed hardware installations for the company, IP telephony usage and the necessary IP assignments."
    },
    {
        id:1,
        title: "Betelgeuse Rocket Team | Teknofest",
        yearSubtitle: "2020 -2021 | Avionic Systems Software Team Captain",
        description: "I was a founding member of the Betelgeuse Rocket team, which was established in September 2020 under the leadership of Kastamonu University Robotics Club, consisting of engineering students, and participated in the Teknofest Rocket competition."
    }
]

let certificates = [
    {
        id:0,
        title: "Programing 101: HTML",
        description: "101: HTML training program and was awarded this certificate."
    },
    {
        id:1,
        title: "Programing 201: HTML5 & CSS",
        description: "201: HTML5 & CSS training program on January 22, 2023 and I was awarded this certificate."
    }
]

let references = [
    {
        id:0,
        subtitle: "Founder of Istanbul Egitim Akademi",
        title: "Caner Mollaoğlu",
        phone: "0541 541 5411",
        email: "user@gmail.com"
    },
    {
        id:1,
        subtitle: "Software Trainer",
        title: "Taner Saydam",
        phone: "0541 541 5411",
        email: "user@gmail.com"
    }
]

let languages = [
    {
        id:0,
        name: "Turkish"
    },
    {
        id:1,
        name: "English"
    }
]

let interests = [
    {
        icon: "bx bx-headphone interests_icon",
        name: "Music"
    },
    {
        icon: "bx bx-book-heart interests_icon",
        name: "Read"
    },
    {
        icon: "bx bxs-plane-alt interests_icon",
        name: "Travel"
    },
    {
        icon: "bx bx-dumbbell interests_icon",
        name: "Fitness"
    }
]

app.get("", (req,res) => {
    res.json({message: "API is working"});
})

app.get("/api/get", (req,res) => {
    const myInformation = {
        person: person,
        skills: skills,
        socialMedias: socialMedias,
        educations: educations,
        workExperiences: workExperiences,
        certificates: certificates,
        references: references,
        languages: languages,
        interests: interests
    }
    res.json(myInformation);
});

app.post("/api/set", (req,res) => {
    const body = req.body;
    person = body.person;
    skills = body.skills;
    socialMedias = body.socialMedias;
    educations = body.educations;
    workExperiences = body.workExperiences;
    certificates = body.certificates;
    references = body.references;
    languages = body.languages;
    interests = body.interests;

    res.json({message: "Update is successful"})
})


app.listen(5500, () => console.log("The application runs over http://localhost:5500."));