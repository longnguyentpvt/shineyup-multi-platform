import { MQTT_TOPICS, APP_NAME } from "@shineyup/constants";

const run = (): void => {
  console.log("Hello, World!", APP_NAME, MQTT_TOPICS);
};

run();
