import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Example} from "./example";

const rootNode = document.createElement('div');
document.body.append(rootNode);
createRoot(rootNode).render(<Example />);