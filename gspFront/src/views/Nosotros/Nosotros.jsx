import { Container, Grid, Typography } from "@mui/material";

export default function Nosotros() {
  return (
    <Container maxWidth="md">
      <Grid>
        <Typography
          variant="h2"
          fontWeight="bold"
          color="darkgreen"
          marginY={5}
        >
          Sobre Nosotros
        </Typography>
        <Grid container spacing={2}>
          <Grid container gap={2} item md={12}>
            <Typography textAlign="left" variant="h5">
              Global Solutions Prefabriquees es una empresa líder en el mercado
              de construcción modular y prefabricada a nivel global. Con más de
              10 años de experiencia, nuestro equipo de expertos en diseño y
              construcción trabaja en estrecha colaboración con clientes de todo
              el mundo para ofrecer soluciones de construcción innovadoras y
              personalizadas que satisfacen las necesidades específicas de cada
              proyecto.
            </Typography>
            <Typography textAlign="left" variant="h6">
              Nos enorgullece ofrecer un enfoque integral para la construcción
              modular, que incluye la planificación, el diseño, la fabricación y
              la instalación de estructuras prefabricadas para diversos
              sectores, incluyendo viviendas, oficinas, comercios, hospitales,
              hoteles, escuelas y muchos más.
            </Typography>
            <Typography textAlign="left" variant="h6">
              Nuestra pasión por la innovación y la sostenibilidad es una parte
              fundamental de nuestra filosofía empresarial. Utilizamos
              tecnología de vanguardia y materiales de alta calidad para
              garantizar la máxima eficiencia energética y la reducción del
              impacto ambiental en cada proyecto. Además, nuestro compromiso con
              la excelencia y la atención al cliente se refleja en nuestra
              política de garantía de satisfacción del 100%. En Global Solutions
              Prefabriquees, nos esforzamos por hacer que la construcción
              modular sea accesible y asequible para todos, sin comprometer la
              calidad o la estética. Esperamos poder trabajar con usted en su
              próximo proyecto de construcción modular y hacer realidad su
              visión de manera eficiente y rentable.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" my={5}>
          <img
            src="http://localhost:3000/images/products/nosotros.jpeg"
            alt="imagen"
            width="100%"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
