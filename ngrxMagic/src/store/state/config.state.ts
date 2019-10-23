import { IConfig } from 'src/app/config.interface';


export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
