import { HTTP_STATUS_CODE_MESSAGES } from 'constants/http-status-code-messages';

export const getErrorMessageForHttpStatusCode = (statusCode: number): string => {
  return HTTP_STATUS_CODE_MESSAGES[statusCode] || HTTP_STATUS_CODE_MESSAGES.default;
};