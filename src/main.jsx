import * as React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {NextUIProvider} from "@nextui-org/react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <App/>
      </DevSupport>
    </main>
  </NextUIProvider>
)
