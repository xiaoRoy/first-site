const KEY_DEV = "Dev";
const DEV_DAY = "D";
const HALF_DEV_DAY = "d";

const KEY_QA = "Qa";
const QA_DAY = "Q";
const HALF_QA_DAY = "q";

const CONVERTING_MAPPING = {
  [DEV_DAY]: { effort: 1.0, key: KEY_DEV },
  [HALF_DEV_DAY]: { effort: 0.5, key: KEY_DEV },
  [QA_DAY]: { effort: 1.0, key: KEY_QA },
  [HALF_QA_DAY]: { effort: 0.5, key: KEY_QA },
};

exports.parseTrackingProgress = (indicators) => {
  const result = {};
  for (const indicator of indicators) {
    const effortMapping = CONVERTING_MAPPING[indicator];
    const effortType = effortMapping.key;

    const currentEffort = result[effortType];
    result[effortType] = (currentEffort || 0.0) + effortMapping.effort;
  }
  return result;
};
