import { pick, omit } from "lodash";
const sanitize = (data, config = {}) => {
    const { saveProperties, ignoreProperties } = config
    /* remove specified properties */
    let result = (ignoreProperties ? omit(data, ignoreProperties) : data)
    /* include only specified properties */
    return (saveProperties ? pick(result, saveProperties) : result);
}
export default sanitize