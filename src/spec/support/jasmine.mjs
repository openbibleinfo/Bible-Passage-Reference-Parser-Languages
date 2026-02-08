export default {
  spec_dir: "src/spec",
  spec_files: [
    "**/*[sS]pec.?(m)js"
  ],
  helpers: [
    "support/helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
