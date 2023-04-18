import { download, upload } from './logic/json.js';
import Despesa from './model/Despesa.js';
import procurar from './logic/procurar.js'
import carregar from './logic/carregar.js'
import campo from "./logic/campos.js";
import gravar from './logic/gravar.js'
import modo from './logic/dark.js';

campo("#tipo", Object.values(new Despesa().getTipos()));