# Eduzz Hooks: Antd Theme

[![version](https://img.shields.io/npm/v/@eduzz/ui-antd-theme)](https://www.npmjs.com/package/@eduzz/ui-antd-theme)
[![size](https://img.shields.io/bundlephobia/min/@eduzz/ui-antd-theme)](https://www.npmjs.com/package/@eduzz/ui-antd-theme)

Implementação padrão do **react-hook-form** para validação de formulário com AntD.

### Instalação

```bash
yarn add @eduzz/ui-antd-theme
```

### Importação

```js
import { ThemeProvider } from '@eduzz/ui-antd-theme';
```

### Parametros

Aceita todas as props do [ConfigProvider](https://ant.design/components/config-provider) do Antd e mais:

| prop       | tipo          | obrigatório | descrição                                           |
|------------|---------------|-------------|-----------------------------------------------------|
| brandColor | `string`      | `false`     | Cor primária do produto, poder ser o nome ou um hex |
| mode       | `light\|dark` | `false`     | Modo dark experimental                              |