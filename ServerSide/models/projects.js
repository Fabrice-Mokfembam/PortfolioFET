const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    ImageURL: {
        type: String,
        required: true,
    },
    ProjectTitle: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required:true
    }
});

data = [
    {
        ImageURL: "https://assets.materialup.com/uploads/88d1352b-d1d4-4b87-a0bd-4debd4e5a61e/preview.png",
        ProjectTitle: "FETCHATAPP",
        status: "completed",
        Description:" this project built for the purpose of learning and testing skillls learned"
    },
    {
        ImageURL: "https://cdn.dribbble.com/users/485324/screenshots/17149308/media/41e2819fe26b4064d49ffb3f4aa8b2aa.png?resize=400x0",
        ProjectTitle: "BANKING SYSTEM",
        status: "completed",
        Description:" this project built for the purpose of learning and testing skillls learned"
    },
    {
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrDeNHWFPdTDH1FBAkAx2NQu9ttWYN8dOPQ&usqp=CAU",
        ProjectTitle: "DEVLAP FORMS",
        status: "On going",
        Description:" this project built for the purpose of learning and testing skillls learned"
    },
    {
        ImageURL: "https://www.shutterstock.com/image-photo/technology-adoption-entertainment-world-concept-260nw-1070000111.jpg",
        ProjectTitle: "MOVIE TICKET BOOKING SYSTEM",
        status: "completed",
        Description:" This project built for the purpose of learning and testing skillls learned"
    },
    {
        ImageURL: "https://simplybook.me/build/images/trial-section/educational.48c74a47.png",
        ProjectTitle: "FET-SOLUTIONS",
        status: "on going",
        Description: " This project built for the purpose of learning and testing skillls learned"
    },
    {
        ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97MhU3lH0x_PYBihnAiqjLXOuQeAkhU4G_TQ25DG6fR8MSVWQYMtficfGTDwxlSQds1k&usqp=CAU",
        ProjectTitle: "NEXT",
        status: "on going",
        Description: " This project built for the purpose of learning and testing skillls learned"
    },
];

const Projectmodel = mongoose.model("projects", projectSchema);
module.exports = Projectmodel;

