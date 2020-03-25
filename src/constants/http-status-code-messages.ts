interface IHttpStatusCodeMessages {
  [ key: string ]: string;
}

export const HTTP_STATUS_CODE_MESSAGES: IHttpStatusCodeMessages = {
  '404': 'The content you are looking for doesn\'t exist',
  'default': 'Something went wrong. Please try again later.',
};