import {cardImage, coffee2, pizza, socialImage, todoImage} from "../assets";

export const projectsData = [
    {
        backgroundImage: coffee2,
        title: "Coffee-store",
        url: "https://e-commerce-coffee-shop.vercel.app/",
        description: "Stack: NextJS, Typescript, ReduxToolkit, Hooks, Chakra, Tailwinds. Coffee-store app with using NextJs",
    },
    {
        backgroundImage: pizza,
        title: "Pizza-store",
        url: "https://github.com/evgenijkadyrov/pizza",
        description: "Stack: React, Redux, JS, Redux-thunks, Hooks. Pizza-store app with using react hooks, routing, working with json-server..",
    },
    {
        backgroundImage: socialImage,
        title: "SocialNetwork",
        url: "https://github.com/evgenijkadyrov/social-network-react-ts",
        description: "Stack: React, Redux, Typescript, Redux-thunks, Hooks. Social network app with using react hooks, routing, lazy loading, working with REST api, login/logout flow, pagination, form and validation/file uploading using unittests for code workability check.",
    },
    {
        backgroundImage: todoImage,
        title: "ToDoList",
        url: "https://github.com/evgenijkadyrov/todolist_v2.0",
        description: "Stack: React, Redux, Typescript, Redux-thunks, Hooks. Check the correctness of the code with Unit Tests and take Storybook for demonstration of individual modules of the application.",
    },
    {
        backgroundImage: cardImage,
        title: "Flash cards",
        url: "https://insane4l.github.io/flash-cards/#/login",
        description: "Stack: React, Redux, Typescript, Redux-thunks, Hooks. Team work. Flash-cards app with using react hooks, routing, lazy loading, working with REST api, login/logout flow, pagination, form and validation.",
    },
];