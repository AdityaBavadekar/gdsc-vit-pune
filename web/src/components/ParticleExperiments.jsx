import Particles from "react-tsparticles";
import particlesConfig from "./config/particlejs-config";

function ParticleExperiment1() {
    return (
        <Particles
            id="tsparticles"
            options={particlesConfig}
        />
    )
}

export default ParticleExperiment1;