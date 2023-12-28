/* eslint-disable */

document.addEventListener('DOMContentLoaded', function () {
    const deviceOn = document.getElementById('deviceOn');
    const homeButton = document.getElementById('homeButton');

    const battery = document.getElementById('battery');
    const wifi = document.getElementById('wifi');

    /*Profile section*/
    const profile = document.getElementById('profile');
    const aboutMe = document.getElementById('aboutMe');
    const image = document.getElementById('image');
    const profileDiv = document.getElementById('profileDiv');
    const interest = document.getElementById('interest');
    const hobbies = document.getElementById('hobbies');

    const contact = document.getElementById('contact');
    const phoneNumber = document.getElementById('phoneNumber');
    const email = document.getElementById('email');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');

    /*Experience section*/
    const experience = document.getElementById('experience');
    const experienceSection = document.getElementById("experienceSection");
    const workBar = document.getElementById("workBar");
    const hackathonBar = document.getElementById("hackathonBar");
    const volunteeringBar = document.getElementById("volunteeringBar");
    const nextPage = document.getElementById('nextPage');
    const background = document.getElementById("background");

    /*Education section*/
    const education = document.getElementById('education');
    const educationSection = document.getElementById("educationSection");
    const diploma = document.getElementById("diploma");
    const universityHat = document.getElementById("universityHat");

    /*Projects section*/
    const projects = document.getElementById('projects');
    const projectsSection = document.getElementById('projectsSection');

    /*Skills section*/
    const skills = document.getElementById('skills');
    const skillsSections = document.getElementById('skillsSection');

    const me = document.getElementById("me");

    const personalExperience = document.getElementById("personalExperience");
    const volunteeringP = document.getElementById("volunteeringP");
    const workP = document.getElementById("workP");
    const hackathonP = document.getElementById("hackathonP");

    const personalSkills = document.getElementById("personalSkills");

    const programmingLanguage = document.getElementById("programmingLanguage");
    const java = document.getElementById("java");
    const c = document.getElementById("c");
    const javascript = document.getElementById("javascript");

    const programmingSoftware = document.getElementById("programmingSoftware");
    const VSC = document.getElementById("VSC");
    const intelliJ = document.getElementById("intelliJ");
    const eclipse = document.getElementById("eclipse");
    const androidStudio = document.getElementById("androidStudio");

    let isDeviceOn = false;

    homeButton.style.border = "7px solid blue";

    // Add a click event listener to the home button
    homeButton.addEventListener('click', () => {
        // Toggle the state of the screen
        isDeviceOn = !isDeviceOn;

        // Update the image source based on the state
        if (isDeviceOn) {
            background.style.display = "none";

            deviceOn.style.backgroundColor = 'white';
            profile.style.backgroundImage = "url('images/profile.png')";
            profile.classList.remove('noHover');
            homeButton.style.border = "none";
            nextPage.style.border = 'none';

            battery.style.backgroundImage = "url('images/battery.png')";
            wifi.style.backgroundImage = "url('images/wifi.png')";

            profile.style.display = "block";
            experience.style.display = 'block';
            education.style.display = 'block';
            projects.style.display = 'block';
            skills.style.display = 'block';
        
            phoneNumber.style.display = "none";

            java.style.display = 'none';
            c.style.display = 'none';
            javascript.style.display = 'none';

            volunteeringP.style.display = 'none';
            workP.style.display = 'none';
            hackathonP.style.display = 'none';
            
            VSC.style.display = 'none';
            intelliJ.style.display = 'none';
            eclipse.style.display = 'none';
            androidStudio.style.display = 'none';

            profile.classList.remove('noHoverIcon');

            profile.addEventListener("click", () => {
                
                nextPage.style.border = 'none';

                profile.style.backgroundImage = 'none';
                profile.classList.add('noHoverIcon');
                profile.classList.remove('noHover');
                aboutMe.style.display = "block";
                phoneNumber.style.display = "none";
                email.style.display = "none";
                linkedin.style.display = "none";
                github.style.display = "none";

                battery.style.backgroundImage = 'none';
                wifi.style.backgroundImage = 'none';

                experience.style.display = 'none';
                education.style.display = 'none';
                projects.style.display = 'none';
                skills.style.display = 'none';

                java.style.display = 'none';
                c.style.display = 'none';
                javascript.style.display = 'none';

                volunteeringP.style.display = 'none';
                workP.style.display = 'none';
                hackathonP.style.display = 'none';

                VSC.style.display = 'none';
                intelliJ.style.display = 'none';
                eclipse.style.display = 'none';
                androidStudio.style.display = 'none';
                
                profileDiv.addEventListener("click", () => {
                    image.style.backgroundImage = "url('images/aboutMe/profileDiv.png')";
                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";
                })
                interest.addEventListener("click", () => {
                    image.style.backgroundImage = "url('images/aboutMe/interest.png')";
                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";
                })
                hobbies.addEventListener("click", () => {
                    image.style.backgroundImage = "url('images/aboutMe/hobbies.png')";
                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";
                })
                contact.addEventListener("click", () => {
                    image.style.backgroundImage = "url('images/aboutMe/contact.png')";
                    phoneNumber.style.display = "block";
                    email.style.display = "block";
                    linkedin.style.display = "block";
                    github.style.display = "block";
                })
            })

            experience.addEventListener("click", () => {
                
                nextPage.style.border = 'none';

                experienceSection.style.display = "block";

                profile.style.backgroundImage = 'none';
                profile.classList.add('noHoverIcon');
                profile.classList.remove('noHover');

                battery.style.backgroundImage = 'none';
                wifi.style.backgroundImage = 'none';

                experience.style.display = 'none';
                education.style.display = 'none';
                educationSection.style.display = "none";
                projects.style.display = 'none';
                skills.style.display = 'none';

                phoneNumber.style.display = "none";
                email.style.display = "none";
                linkedin.style.display = "none";
                github.style.display = "none";

                java.style.display = 'none';
                c.style.display = 'none';
                javascript.style.display = 'none';

                volunteeringP.style.display = 'none';
                workP.style.display = 'none';
                hackathonP.style.display = 'none';

                VSC.style.display = 'none';
                intelliJ.style.display = 'none';
                eclipse.style.display = 'none';
                androidStudio.style.display = 'none';
                
                workBar.addEventListener("click", () => {
                    experienceSection.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/experience/work.png')"; 
                })

                hackathonBar.addEventListener("click", () => {
                    experienceSection.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/experience/hackathon.png')";
                })

                volunteeringBar.addEventListener("click", () => {
                    nextPage.style.display = "block";

                    experienceSection.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/experience/volunteering1.png')";
                    nextPage.style.border = "7px solid blue";
                    
                    nextPage.addEventListener("click", () => {
                        experienceSection.style.display = "none";
                        background.style.display = "block";
                        background.style.backgroundImage = "url('images/experience/volunteering2.png')";
                        nextPage.style.border = "none";
                    })
                })
            })

            education.addEventListener("click", () => {

                nextPage.style.border = 'none';

                educationSection.style.display = 'block';

                profile.style.backgroundImage = 'none';
                profile.classList.add('noHoverIcon');
                profile.classList.remove('noHover');

                battery.style.backgroundImage = 'none';
                wifi.style.backgroundImage = 'none';

                experience.style.display = 'none';
                education.style.display = 'none';
                projects.style.display = 'none';
                skills.style.display = 'none';

                phoneNumber.style.display = "none";
                email.style.display = "none";
                linkedin.style.display = "none";
                github.style.display = "none";

                java.style.display = 'none';
                c.style.display = 'none';
                javascript.style.display = 'none';

                volunteeringP.style.display = 'none';
                workP.style.display = 'none';
                hackathonP.style.display = 'none';

                VSC.style.display = 'none';
                intelliJ.style.display = 'none';
                eclipse.style.display = 'none';
                androidStudio.style.display = 'none';
                
                diploma.addEventListener("click", () => {
                    educationSection.style.display = 'none';
                        background.style.display = "block";
                        background.style.backgroundImage = "url('images/education/highschool.png')";
                })

                universityHat.addEventListener("click", () => {
                    educationSection.style.display = 'none';
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/education/university.png')";
                })
            })

            projects.addEventListener("click", () => {
                nextPage.style.border = 'none';

                projectsSection.style.display = "block";
                projects.style.display = 'none';

                profile.style.backgroundImage = 'none';
                profile.classList.add('noHoverIcon');
                profile.classList.remove('noHover');

                battery.style.backgroundImage = 'none';
                wifi.style.backgroundImage = 'none';

                experience.style.display = 'none';
                education.style.display = 'none';
                educationSection.style.display = "none";
                skills.style.display = 'none';

                phoneNumber.style.display = "none";
                email.style.display = "none";
                linkedin.style.display = "none";
                github.style.display = "none";

                java.style.display = 'none';
                c.style.display = 'none';
                javascript.style.display = 'none';

                volunteeringP.style.display = 'none';
                workP.style.display = 'none';
                hackathonP.style.display = 'none';

                VSC.style.display = 'none';
                intelliJ.style.display = 'none';
                eclipse.style.display = 'none';
                androidStudio.style.display = 'none';
            })

            skills.addEventListener("click", () => {
                
                nextPage.style.border = 'none';

                skillsSections.style.display = "block";

                profile.style.backgroundImage = 'none';
                profile.classList.add('noHoverIcon');
                profile.classList.remove('noHover');

                battery.style.backgroundImage = 'none';
                wifi.style.backgroundImage = 'none';

                experience.style.display = 'none';
                education.style.display = 'none';
                educationSection.style.display = "none";
                projects.style.display = 'none';
                skills.style.display = 'none';

                phoneNumber.style.display = "none";
                email.style.display = "none";
                linkedin.style.display = "none";
                github.style.display = "none";

                java.style.display = 'none';
                c.style.display = 'none';
                javascript.style.display = 'none';

                volunteeringP.style.display = 'none';
                workP.style.display = 'none';
                hackathonP.style.display = 'none';

                VSC.style.display = 'none';
                intelliJ.style.display = 'none';
                eclipse.style.display = 'none';
                androidStudio.style.display = 'none';

                me.addEventListener("click", () => {
                    skillsSections.style.display = "none";
                    profile.click();
                })

                personalExperience.addEventListener("click", () => {
                    skillsSections.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/skills/personalExperience.png')";

                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";
                    
                    java.style.display = 'none';
                    c.style.display = 'none';
                    javascript.style.display = 'none';
                    
                    volunteeringP.style.display = 'block';
                    workP.style.display = 'block';
                    hackathonP.style.display = 'block';

                    VSC.style.display = 'none';
                    intelliJ.style.display = 'none';
                    eclipse.style.display = 'none';
                    androidStudio.style.display = 'none';

                    volunteeringP.addEventListener("click", () => {
                        background.style.display = "none";
                        experience.click();
                        volunteeringBar.click();
                    })

                    workP.addEventListener("click", () => {
                        background.style.display = "none";
                        experience.click();
                        workBar.click();
                    })

                    hackathonP.addEventListener("click", () => {
                        background.style.display = "none";
                        experience.click();
                        hackathonBar.click();
                    })
                })

                personalSkills.addEventListener("click", () => {
                    skillsSections.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/skills/personalSkills.png')";

                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";
                    
                    java.style.display = 'none';
                    c.style.display = 'none';
                    javascript.style.display = 'none';

                    volunteeringP.style.display = 'none';
                    workP.style.display = 'none';
                    hackathonP.style.display = 'none';

                    VSC.style.display = 'none';
                    intelliJ.style.display = 'none';
                    eclipse.style.display = 'none';
                    androidStudio.style.display = 'none';
                })

                programmingLanguage.addEventListener("click", () => {
                    skillsSections.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/skills/programmingLanguages.png')";

                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";
                   
                    java.style.display = 'block';
                    c.style.display = 'block';
                    javascript.style.display = 'block';

                    volunteeringP.style.display = 'none';
                    workP.style.display = 'none';
                    hackathonP.style.display = 'none';

                    VSC.style.display = 'none';
                    intelliJ.style.display = 'none';
                    eclipse.style.display = 'none';
                    androidStudio.style.display = 'none';

                    java.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                    c.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                    javascript.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                })

                programmingSoftware.addEventListener("click", () => {
                    skillsSections.style.display = "none";
                    background.style.display = "block";
                    background.style.backgroundImage = "url('images/skills/programmingSoftware.png')";

                    phoneNumber.style.display = "none";
                    email.style.display = "none";
                    linkedin.style.display = "none";
                    github.style.display = "none";

                    java.style.display = 'none';
                    c.style.display = 'none';
                    javascript.style.display = 'none';

                    volunteeringP.style.display = 'none';
                    workP.style.display = 'none';
                    hackathonP.style.display = 'none';

                    VSC.style.display = 'block';
                    intelliJ.style.display = 'block';
                    eclipse.style.display = 'block';
                    androidStudio.style.display = 'block';

                    VSC.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                    intelliJ.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                    eclipse.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                    androidStudio.addEventListener("click", () => {
                        background.style.display = "none";
                        profile.click();
                    })

                })
            })

            document.addEventListener('keydown', (event) => {
                const key = event.key;
                // Makes sure pressing "B" doesn't trigger the deivce to turn on while screen is off
                if (isDeviceOn) {
                    // Check if the pressed key is "b" (keyCode 66) or "Backspace" (key "Backspace")
                    if (key === "b" || key === "B" || event.keyCode === 66) {
                        // Perform the action you want, e.g., toggle off the device
                        nextPage.style.border = 'none';

                        background.style.display = "none";
                        
                        deviceOn.style.backgroundColor = 'white';
                        profile.style.backgroundImage = "url('images/profile.png')";
                        profile.classList.remove('noHover');

                        battery.style.backgroundImage = "url('images/battery.png')";
                        wifi.style.backgroundImage = "url('images/wifi.png')";

                        profile.style.display = "block";
                        aboutMe.style.display = "none";

                        experience.style.display = 'block';
                        experienceSection.style.display = "none";

                        education.style.display = 'block';
                        educationSection.style.display = "none";

                        projects.style.display = 'block';
                        projectsSection.style.display = "none";

                        skills.style.display = 'block';
                        skillsSections.style.display = "none";

                        phoneNumber.style.display = "none";
                        email.style.display = "none";
                        linkedin.style.display = "none";
                        github.style.display = "none";

                        java.style.display = 'none';
                        c.style.display = 'none';
                        javascript.style.display = 'none';

                        volunteeringP.style.display = 'none';
                        workP.style.display = 'none';
                        hackathonP.style.display = 'none';

                        VSC.style.display = 'none';
                        intelliJ.style.display = 'none';
                        eclipse.style.display = 'none';
                        androidStudio.style.display = 'none';

                        profile.classList.remove('noHoverIcon');
                    }
                }
            });

        } else {
            deviceOn.style.backgroundColor = 'transparent';
            background.style.display = "none";
            homeButton.style.border = "7px solid blue";
            nextPage.style.border = 'none';
            
            profile.style.backgroundImage = 'none';
            profile.classList.add('noHover');
            aboutMe.style.display = "none";
            phoneNumber.style.display = "none";
            email.style.display = "none";
            linkedin.style.display = "none";
            github.style.display = "none";

            battery.style.backgroundImage = 'none';
            wifi.style.backgroundImage = 'none';

            experience.style.display = 'none';
            experienceSection.style.display = 'none';

            education.style.display = 'none';
            educationSection.style.display = 'none';

            projects.style.display = 'none';
            projectsSection.style.display = 'none';

            skills.style.display = 'none';
            skillsSection.style.display = 'none';

            java.style.display = 'none';
            c.style.display = 'none';
            javascript.style.display = 'none';

            volunteeringP.style.display = 'none';
            workP.style.display = 'none';
            hackathonP.style.display = 'none';

            VSC.style.display = 'none';
            intelliJ.style.display = 'none';
            eclipse.style.display = 'none';
            androidStudio.style.display = 'none';
        }

        // Toggle the class name of the home button for styling
        homeButton.classList.toggle('active', isDeviceOn);
    })
})
