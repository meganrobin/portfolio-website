import project1_thumbnail from '../assets/project1_thumbnail.png'
import project1_gif from '../assets/project1.gif'
import project2_thumbnail from '../assets/project2_thumbnail.png'
import project2_gif from '../assets/project2.gif'
import project3_thumbnail from '../assets/project3_thumbnail.png'
import project3_gif from '../assets/project3.gif'
import project4_thumbnail from '../assets/project4_thumbnail.png'
import project4_gif from '../assets/project4.gif'
import project5_thumbnail from '../assets/project5_thumbnail.png'
import project5_gif from '../assets/project5.gif'
import project6_thumbnail from '../assets/project6_thumbnail.png'
import project6_gif from '../assets/project6.gif'


const projects_data = [
    {
        p_no: 1,
        p_name: "Creature Catcher",
        p_img: project1_thumbnail,
        p_gif: project1_gif,
        p_contribution: 'Main Gameplay Programmer, Creature Placement System, Controller Design and Construction',
        p_description: "A GPS-powered, location-based creature-catching game with a custom Bluetooth controller.",
        p_tags: ["Python", "Mu Editor", "Godot 4"],
        p_link_1_description: "Play Online: ",
        p_link_1: "https://mogin.itch.io/creature-catcher"
    },
    {
        p_no: 2,
        p_name: "Darcie's Diner",
        p_img: project2_thumbnail,
        p_gif: project2_gif,
        p_contribution: 'Solo Project (Programming, UI/UX Design, Art, Animation)',
        p_description: "A spunky restaurant simulator with handcrafted pixel shaders and NPC pathfinding AI.",
        p_tags: ["Godot 4", "Pathfinding AI", "Shaders"],
        p_link_1_description: "Play Online: ",
        p_link_1: "https://mogin.itch.io/darcies-diner"
    },
    {
        p_no: 3,
        p_name: "Rat Roll",
        p_img: project3_thumbnail,
        p_gif: project3_gif,
        p_contribution: 'Solo Project (Programming, UI/UX Design, Art, Animation)',
        p_description: "A dice-rolling adventure game about saving the world while caring for ultra-picky rats.",
        p_tags: ["Godot 3", "Aesprite", "State Machines", "Braching Storylines"],
        p_link_1_description: "Play Online: ",
        p_link_1: "https://mogin.itch.io/rat-roll"
    },
    {
        p_no: 4,
        p_name: "Pistol Shrimp",
        p_img: project4_thumbnail,
        p_gif: project4_gif,
        p_contribution: 'Gameplay and UI/UX Programmer',
        p_description: "A 3D underwater defense game featuring a real-time minimap UI to track incoming enemies.",
        p_tags: ["Unity 3D", "C#", "Maya"],
        p_link_1_description: "Play Online: ",
        p_link_1: "https://thecode327.itch.io/pistol-shrimp"
    },
    {
        p_no: 5,
        p_name: "A Scientist's Last Stand",
        p_img: project5_thumbnail,
        p_gif: project5_gif,
        p_contribution: 'Enemy Behavior Programming, Art, Animation',
        p_description: "A bullet hell and tower defense game exploring complex enemy behaviors and wave systems.",
        p_tags: ["Godot 4", "Procedural Animation"],
        p_link_1_description: "Play Online: ",
        p_link_1: "https://jkschies.itch.io/scientists-last-stand"
    },
    {
        p_no: 6,
        p_name: "Smile and Nod Improv Website",
        p_img: project6_thumbnail,
        p_gif: project6_gif,
        p_contribution: 'Full-Stack Web Developer',
        p_description: "A dynamic website for Cal Poly's improv comedy team, complete with an admin portal for easy edits.",
        p_tags: ["React.js", "HTML", "CSS", "Firebase"],
        p_link_1_description: "Website: ",
        p_link_1: "https://smileandnodimprov.com"
    }
]

export default projects_data