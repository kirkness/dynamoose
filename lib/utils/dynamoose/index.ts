import get_provisioned_throughput from "./get_provisioned_throughput";
import wildcard_allowed_check = require("./wildcard_allowed_check");
import index_changes from "./index_changes";
import * as convertConditionArrayRequestObjectToString from "./convertConditionArrayRequestObjectToString";
import getValueTypeCheckResult = require("./getValueTypeCheckResult");
import { documentToJSON } from "./documentToJSON";

export = {
	get_provisioned_throughput,
	wildcard_allowed_check,
	index_changes,
	convertConditionArrayRequestObjectToString,
	getValueTypeCheckResult,
	documentToJSON
};
