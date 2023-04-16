import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
    rem,
  } from '@mantine/core';
  import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }));
  
  const features = [
    {
      icon: IconReceiptOff,
      title: 'Rapidez',
      description: 'Ullamco cupidatat et eu sunt reprehenderit cupidatat et incididunt.',
    },
    {
      icon: IconFileCode,
      title: 'Seguridad',
      description: 'Ullamco cupidatat et eu sunt reprehenderit cupidatat et incididunt.',
    },
    {
      icon: IconCircleDotted,
      title: 'Los mejores precios',
      description:
        'Ullamco cupidatat et eu sunt reprehenderit cupidatat et incididunt.',
    },
    {
      icon: IconFlame,
      title: 'Flexible',
      description:
        'Ullamco cupidatat et eu sunt reprehenderit cupidatat et incididunt.',
    },
  ];
  
  export function FeaturesTitle() {
    const { classes } = useStyles();
  
    const items = features.map((feature) => (
      <div key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
        >
          <feature.icon size={rem(26)} stroke={1.5} />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text c="dimmed" fz="sm">
          {feature.description}
        </Text>
      </div>
    ));
  
    return (
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Buscar maquinaria para tus proyectos nunca habia sido tan facil.
            </Title>
            <Text c="dimmed">
            ut officia officia ad officia proident et ea reprehenderit consequat duis fugiat duis ut nostrud culpa amet dolore sit exercitation ex ad anim irure mollit officia deserunt sint ut eu aliquip excepteur 
            </Text>

          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    );
  }