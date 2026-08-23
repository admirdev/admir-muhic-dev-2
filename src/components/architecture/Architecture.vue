<template>
    <div class="container my-5 shadow p-4 p-md-5 bg-white rounded border-top border-light-blue border-5">
        <header class="mb-5">
            <p class="text-light-blue text-uppercase small fw-bold mb-2">
                Teknik & struktur
            </p>
            <h1 class="display-6 fw-bold text-dark text-uppercase mb-3">
                Arkitektur
            </h1>
            <p class="lead text-muted mb-0">
                En modern och skalbar lösning där frontend, backend, integrationer och
                drift samverkar på ett tydligt sätt.
            </p>
        </header>

        <div class="row g-4">
            <div class="col-lg-6">
                <section class="architecture-card h-100 p-4">
                    <div class="d-flex align-items-center mb-4">
                        <div class="icon-box me-3">
                            <i class="bi bi-hdd-stack"></i>
                        </div>
                        <div>
                            <p class="text-light-blue text-uppercase small fw-bold mb-1">
                                01 / Server
                            </p>
                            <h2 class="h4 fw-bold mb-0">Backend</h2>
                        </div>
                    </div>

                    <div class="technology-group mb-4">
                        <h3 class="h6 fw-bold">Ramverk & runtimes</h3>
                        <p class="text-muted small mb-2">
                            .NET 8/9 och ASP.NET Core Web API med controller-baserad
                            arkitektur.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge border text-light-blue">.NET 8/9</span>
                            <span class="badge border text-light-blue">ASP.NET Core</span>
                            <span class="badge border text-light-blue">C#</span>
                        </div>
                    </div>

                    <div class="technology-group">
                        <h3 class="h6 fw-bold">Arkitektur & säkerhet</h3>
                        <p class="text-muted small mb-2">
                            Dependency Injection för löskopplad kod och Service Pattern med
                            tydliga gränssnitt.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge border text-light-blue">RESTful API</span>
                            <span class="badge border text-light-blue">Dependency Injection</span>
                            <span class="badge border text-light-blue">CORS</span>
                            <span class="badge border text-light-blue">Miljövariabler</span>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-lg-6">
                <section class="architecture-card h-100 p-4">
                    <div class="d-flex align-items-center mb-4">
                        <div class="icon-box me-3">
                            <i class="bi bi-window-stack"></i>
                        </div>
                        <div>
                            <p class="text-light-blue text-uppercase small fw-bold mb-1">
                                02 / Klient
                            </p>
                            <h2 class="h4 fw-bold mb-0">Frontend</h2>
                        </div>
                    </div>

                    <div class="technology-group mb-4">
                        <h3 class="h6 fw-bold">Ramverk & gränssnitt</h3>
                        <p class="text-muted small mb-2">
                            Vue.js 3 som Single Page Application med responsiv design i
                            Bootstrap 5 och egen CSS/SCSS.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge border text-light-blue">Vue.js 3</span>
                            <span class="badge border text-light-blue">Bootstrap 5</span>
                            <span class="badge border text-light-blue">HTML5/CSS3</span>
                            <span class="badge border text-light-blue">JavaScript ES6+</span>
                        </div>
                    </div>

                    <div class="technology-group">
                        <h3 class="h6 fw-bold">Kommunikation & verktyg</h3>
                        <p class="text-muted small mb-2">
                            Axios och Fetch API används för tydlig kommunikation med backend,
                            paketerad med Vite och hanterad via Node.js och npm.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge border text-light-blue">Axios / Fetch API</span>
                            <span class="badge border text-light-blue">Vite</span>
                            <span class="badge border text-light-blue">Node.js</span>
                            <span class="badge border text-light-blue">npm</span>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-lg-6">
                <section class="architecture-card h-100 p-4">
                    <div class="d-flex align-items-center mb-4">
                        <div class="icon-box me-3">
                            <i class="bi bi-cloud-arrow-up"></i>
                        </div>
                        <div>
                            <p class="text-light-blue text-uppercase small fw-bold mb-1">
                                03 / Leverans
                            </p>
                            <h2 class="h4 fw-bold mb-0">DevOps & hosting</h2>
                        </div>
                    </div>

                    <p class="text-muted small">
                        Git och GitHub håller versionshanteringen samlad, medan GitHub
                        Actions automatiserar bygg, test och publicering vid push till
                        <code>main</code>.
                    </p>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <span class="badge border text-light-blue">Git</span>
                        <span class="badge border text-light-blue">GitHub</span>
                        <span class="badge border text-light-blue">GitHub Actions</span>
                        <span class="badge border text-light-blue">Conventional Commits</span>
                    </div>

                    <div class="deployment-list small">
                        <div class="d-flex justify-content-between border-top py-2">
                            <span class="text-muted">Backend</span>
                            <strong>MonsterASP.NET / IIS</strong>
                        </div>
                        <div class="d-flex justify-content-between border-top py-2">
                            <span class="text-muted">Frontend & DNS</span>
                            <strong>admirmuhic.se</strong>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-lg-6">
                <section class="architecture-card h-100 p-4">
                    <div class="d-flex align-items-center mb-4">
                        <div class="icon-box me-3">
                            <i class="bi bi-activity"></i>
                        </div>
                        <div>
                            <p class="text-light-blue text-uppercase small fw-bold mb-1">
                                04 / Insikt
                            </p>
                            <h2 class="h4 fw-bold mb-0">Övervakning</h2>
                        </div>
                    </div>

                    <div class="monitoring-item d-flex mb-3">
                        <i class="bi bi-heart-pulse text-light-blue me-3 mt-1"></i>
                        <div>
                            <h3 class="h6 fw-bold mb-1">Better Stack</h3>
                            <p class="text-muted small mb-0">
                                Better Uptime övervakar frontend och API och skickar larm via
                                mail eller push om något går ner.
                            </p>
                        </div>
                    </div>

                    <div class="monitoring-item d-flex">
                        <i class="bi bi-bar-chart-line text-light-blue me-3 mt-1"></i>
                        <div>
                            <h3 class="h6 fw-bold mb-1">Umami Cloud</h3>
                            <p class="text-muted small mb-0">
                                Integritetsvänlig och GDPR-säker webbanalys utan spårningskakor,
                                integrerad i Vue-applikationen.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "Architecture",
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables/_colors.scss";
@import "@/styles/components/_border.scss";

.architecture-card {
    background: $bg-gray;
    border-left: 4px solid $text-light-blue;
    border-radius: 0.375rem;
}

.icon-box {
    display: grid;
    width: 3rem;
    height: 3rem;
    place-items: center;
    color: $text-white;
    background: $bg-dark-blue;
    border-radius: 0.375rem;
    font-size: 1.35rem;
}

.technology-group+.technology-group {
    border-top: 1px solid rgba($text-light-blue, 0.2);
    padding-top: 1rem;
}

.badge {
    font-weight: 500;
    background: $bg-white;
}

code {
    color: $text-light-blue;
}

.deployment-list strong {
    color: #343a40;
    font-weight: 600;
}
</style>
