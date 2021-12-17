import { SetMetadata } from '@nestjs/common';
import { Condition } from "../../carparks/enum";

export const CONDITION_KEY = 'condition';
export const Conditions = (...conditions: Condition[]) => SetMetadata(CONDITION_KEY, conditions);