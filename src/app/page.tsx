export default function Home() {
    return (
        <>
            <p className="absolute top-2 left-2 animate-blinkingText">4</p>
            <p className="absolute left-2 bottom-2 animate-blinkingText">5</p>
            <p className="absolute top-2 right-2 animate-blinkingText">1</p>
            <main className="grid place-items-center h-screen text-center">
                <h1 className="text-6xl">
                    ÊTES VOUS ASSEZ <span className="char">ATTENTIF</span> ?
                </h1>
            </main>
        </>
    );
}
