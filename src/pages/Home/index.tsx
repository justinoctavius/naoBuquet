import { Box } from '@mui/material';
import { ScreenTemplate } from '../../components/templates/ScreenTemplate';
import { CounterCard } from '../../components/molecules/CounterCard';
import { FeatureCard } from '../../components/molecules/FeatureCard';
import { Section } from '../../components/molecules/Section';
import FastIcon from '@mui/icons-material/FlashOn';
import DiversityIcon from '@mui/icons-material/Diversity2';
import SupportIcon from '@mui/icons-material/SupportAgent';
import LockIcon from '@mui/icons-material/Lock';
import ExpandableCard from '../../components/molecules/ExpansableCard';
import { Footer } from '../../components/organisms/Footer';

export const HomePage = () => {
  return (
    <ScreenTemplate footer={<Footer />}>
      <Box>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          gap={2}
          mt={4}
          mb={8}
        >
          <CounterCard
            count={300}
            title="Reservas realizadas"
            description={
              'En nuestra constante búsqueda de excelencia, nos esforzamos día tras día para perfeccionar nuestros servicios, garantizando así una experiencia de reserva insuperable. '
            }
          />
          <CounterCard
            count={10}
            title="Servicios inscritos"
            description={
              'En nuestra plataforma, creemos firmemente que el éxito radica en los detalles. Por ello, ofrecemos una visión detallada y precisa de todas las métricas relacionadas con los servicios inscritos en nuestra app de reservas. '
            }
          />
        </Box>
        <Section title="Características de NaoBuquet">
          <FeatureCard
            icon={<FastIcon color={'primary'} />}
            title="Reservas Instantáneas"
            description="Garantizamos un sistema de reservas fluido y sin interrupciones, permitiendo a los usuarios confirmar citas y reservas en tiempo real, sin esperas ni complicaciones."
          />
          <FeatureCard
            icon={<DiversityIcon color="primary" />}
            title="Diversidad de Servicios"
            description="Ofrecemos una amplia gama de servicios para satisfacer diversas necesidades y preferencias, desde citas de bienestar hasta reservas en restaurantes y eventos especiales."
          />
          <FeatureCard
            icon={<SupportIcon color="primary" />}
            title="Soporte al Cliente 24/7"
            description="Ofrecemos asistencia continua a través de nuestro servicio de atención al cliente disponible todos los días, a cualquier hora, para resolver dudas y atender cualquier incidencia."
          />
          <FeatureCard
            icon={<LockIcon color="primary" />}
            title="Seguridad y Privacidad"
            description="Aseguramos la protección de los datos personales y la información de pago mediante sistemas de seguridad de vanguardia y protocolos de privacidad estrictos."
          />
        </Section>

        <Section title="Preguntas frecuentes">
          <ExpandableCard
            title="¿Cómo puedo reservar una cita?"
            moreText="Puedes reservar una cita fácilmente a través de nuestra página web, donde encontrarás un calendario de disponibilidad. Simplemente selecciona la fecha y hora que mejor te convenga y sigue los pasos para completar tu reserva"
          />
          <ExpandableCard
            title="¿Cuales son los servicios disponibles para reservar?"
            moreText="Ofrecemos una amplia gama de servicios, que incluyen [lista de servicios]. Puedes encontrar más detalles sobre cada servicio en nuestra página web o contactarnos para obtener más información."
          />
          <ExpandableCard
            title="¿Cuál es la política de cancelación y re-programación?"
            moreText="Si necesitas cancelar o re-programar tu cita, te pedimos que lo hagas con al menos 1 día de anticipación. De esta manera, podemos gestionar adecuadamente nuestro horario y atender a otros clientes. Consulta nuestra política de cancelación completa en nuestra página web para más detalles."
          />
          <ExpandableCard
            title="¿Puedo realizar cambios en mi reserva una vez confirmada?"
            moreText="Sí, puedes realizar cambios en tu reserva siempre y cuando nos avises con suficiente anticipación. Esto nos permite ajustar nuestro horario y garantizar que podamos atender tu solicitud."
          />
          <ExpandableCard
            title="¿Qué debo hacer si llego tarde a mi cita?"
            moreText="Si llegas tarde a tu cita, te recomendamos que nos llames para informarnos. Haremos todo lo posible para acomodarte en el horario disponible más cercano."
          />
        </Section>
      </Box>
    </ScreenTemplate>
  );
};
