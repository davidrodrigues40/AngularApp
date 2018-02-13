import { inherits } from "util";
import { ReportListItem } from "./report-list-item";

export class ReportDetail extends ReportListItem {
    Author: string;
    PublishedOn: Date;
    PageCount: number;
}
