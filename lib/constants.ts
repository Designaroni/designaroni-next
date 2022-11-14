import variables from "@/styles/variables.module.scss";

interface Constants {
  swing: number[];
}

const CONSTANTS: Constants = {
  swing: variables.swing.split(",").map(Number),
};

export default CONSTANTS;
