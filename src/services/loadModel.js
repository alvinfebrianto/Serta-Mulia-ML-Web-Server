const tf = require("@tensorflow/tfjs-node");
const path = require("path");

async function loadModel() {
  const modelPath = `file://${path.resolve(
    __dirname,
    "../../models/model.json"
  )}`;
  return tf.loadGraphModel(modelPath);
}

module.exports = loadModel;
