import { ValidationPipeOptions } from "@nestjs/common";
import { UseContainerOptions } from "class-validator";

export const ValidationConfig: ValidationPipeOptions = {
	transform: true,
	transformOptions: { enableImplicitConversion: false },
	stopAtFirstError: true,
	whitelist: true,
	forbidUnknownValues: true,
};

export const ValidatorContainerConfig: UseContainerOptions = {
	fallback: true,
	fallbackOnErrors: true,
};
