import { createOdontogram } from "./core";

function App() {
    const universal = createOdontogram();

    const fdi = createOdontogram({ numberingSystem: "FDI" });

    return (
        <main>
            <h1>Odontogram SDK</h1>

            <h2>Universal</h2>

            <p>
                UR8: {universal.teeth.UR8.number}
            </p>

            <p>
                UL1: {universal.teeth.UL1.number}
            </p>

            <h2>FDI</h2>

            <p>
                UR8: {fdi.teeth.UR8.number}
            </p>

            <p>
                UL1: {fdi.teeth.UL1.number}
            </p>
        </main>
    );
}

export default App;