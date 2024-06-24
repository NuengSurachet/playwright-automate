import { getSharedProjectType } from "../../src/utils/store/projectType.store";

export const setupPermissionPositionData = {
    ProjectListName : [ // เพิ่มชื่อโปรเจ็กต์
        "Icon-M3 - Icon-M",
        "Icon-M4 - Icon-M4",
        "HQ_FULC - Head Office",
        "IC-M",
        getSharedProjectType('ProjectCode')
    ],
    DepartmentListName : [ // เพิ่มชื่อ department
        "FCR003 - แผนกบุคคล",
        "FCR004 - แผนกพัฒนาธุรกิจ"
    ]
}