import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.3',
  info: {
    title: 'Guitar Api Blog Documentation',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3002/api/v1',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      item: {
        type: 'object',
        required: ['name', 'type', 'color', 'description', 'price'],
        properties: {
          name: {
            type: 'string',
            description: 'guitar model name',
          },
          type: {
            type: 'string',
            enum: ['acoustic', 'electro acoustic', 'electric'],
            description: 'guitar type',
          },
          color: {
            type: 'string',
            description: 'guitar model',
          },
          description: {
            type: 'string',
            description: 'model characteristics',
          },
          price: {
            type: 'number',
            description: 'guitar price in dollars',
          },
        },
      },
      storage: {
        type: 'object',
        required: ['fileName'],
        properties: {
          fileName: {
            media: {
              type: 'string',
              format: 'base64',
            },
          },
        },
      },
      userRegister: {
        type: 'object',
        required: ['name', 'password', 'email'],
        properties: {
          name: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
        },
      },
      userLogin: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
      },
    },
    parameters: {
      itemId: {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'string',
        },
        description: 'item id',
      },
    },
  },
};

const swaggerOption: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/v1/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOption);
