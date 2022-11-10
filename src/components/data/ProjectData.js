import todo_1 from "../assets/screenshots/todo.png";
import todo_2 from "../assets/screenshots/todo_2.png";
import todo_3 from "../assets/screenshots/todo_3.png";

import task_1 from "../assets/screenshots/task_tracker.png";
import task_2 from "../assets/screenshots/task_tracker_2.png";

import budget from "../assets/screenshots/budget.png";
import budget_2 from "../assets/screenshots/budget_1.png";
import budget_3 from "../assets/screenshots/budget_2.png";

import motor from "../assets/screenshots/motorcycle.png";
import motor_2 from "../assets/screenshots/motorcycle_2.png";
import motor_3 from "../assets/screenshots/motorcycle_3.png";

import metrics from "../assets/screenshots/metrics.png";
import metrics_2 from "../assets/screenshots/metrics_2.png";

import rocket from "../assets/screenshots/rocket.png";
import rocket_2 from "../assets/screenshots/rocket_2.png";
import rocket_3 from "../assets/screenshots/rocket_3.png";
import rocket_4 from "../assets/screenshots/rocket_4.png";

const project = {
  image_1: {
    img_1: todo_1,
    img_2: todo_2,
    img_3: todo_3,
  },
  image_2: {
    img_4: task_1,
    img_5: task_2,
  },
  image_3: {
    img_6: budget,
    img_7: budget_2,
    img_8: budget_3,
  },
  image_4: {
    img_9: motor,
    img_10: motor_2,
    img_11: motor_3,
  },
  image_5: {
    img_12: metrics,
    img_13: metrics_2,
  },
  image_6: {
    img_14: rocket,
    img_15: rocket_2,
    img_16: rocket_3,
    img_17: rocket_4,
  },
  project_content: {
    todo: {
      name: "Todo App",
      desc: "This is an SPA todo list app where users can manage their tasks and events in a timely manner.",
      lang_used: {
        react: "React",
        webpack: "Webpacker",
        css: "CSS",
      },
      live_demo: "https://oluyaratosin123.github.io/To-Do-List-App/",
      source_code: "https://github.com/oluyaratosin123/To-Do-List-App",
    },
    task_tracker: {
      name: "Task Tracker App",
      desc: "This is a project that keeps track of your event in a day or a month and customizes them to help you achieve your tasks in a timely manner.",
      lang_used: {
        react: "React",
        css: "CSS",
        webpack: "Webpacker",
        json: "JSON-server",
      },
      live_demo: "",
      source_code: "",
    },
    budget_app: {
      name: "Pocket Smith App",
      desc: "This is a mobile web application where you can manage your budget and see a list of transactions associated with a category.",
      lang_used: {
        postgres: "Postgres",
        rails: "Ruby on Rails",
        bootstrap: "Bootstrap",
        js: "Javascript",
      },
      live_demo: "https://pocket-smith.herokuapp.com/",
      source_code: "https://github.com/oluyaratosin123/Pocket-Smith",
    },
    bcycom_app: {
      name: "Bcycom App",
      desc: "This app was built with Rails and React, Bcycom app can allow you to store and reserve your most favorite motorcycle models...",
      lang_used: {
        react: "React",
        rails: "Rails",
        webpack: "Webpacker",
        jwt: "Jwt-auth",
      },
      live_demo: "https://bcycom.herokuapp.com/",
      api_source_code:
        "https://github.com/oluyaratosin123/Final-Capstone-Back-End",
      ui_source_code: "https://github.com/Dagic-zewdu/final-capstone-frontend",
    },
    metrics_app: {
      name: "Metrics App",
      desc: "This is a simple React app integrated with a REST API documention that consists of various company details",
      lang_used: {
        react: "React",
        webpack: "Webpacker",
        css: "CSS",
      },
      live_demo: "https://immense-brook-29259.herokuapp.com/",
      source_code: "",
    },
    space_travellers_app: {
      name: "Space Traveller App",
      desc: "This project was built with React to collect users request to book a rocket using the SpaceX API documentation",
      lang_used: {
        react: "React",
        webpack: "Webpacker",
        bootstrap: "Bootstrap",
      },
      live_demo: "",
      source_code: "",
    },
  },
};

export { project };
