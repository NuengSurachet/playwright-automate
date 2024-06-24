import { setSharedProjectType,getSharedProjectType } from "../../src/utils/store/projectType.store"

setSharedProjectType('PhaseCode',"Ph01")

export const setUpPhaseBuildingData = {
    name : getSharedProjectType('ProjectCode'), // หา Project Name , Project Code
    phaseCode : getSharedProjectType('PhaseCode'), // Phase Code : * (ห้ามซ้ำ)
    phaseName : getSharedProjectType('PhaseCode'), // Phase Name : *
    phaseNameEN : getSharedProjectType('PhaseCode'), // Phase Name (EN) : *
}