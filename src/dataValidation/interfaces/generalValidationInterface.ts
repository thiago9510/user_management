//tipagem de definição de parametros
export interface BodyValidatorDefinition {
    required: boolean
    type: 'string' | 'number' | 'boolean' | 'object' | 'array'
    enum?: string[]
    format?: string
    length: number
    properties?: { [key: string]: BodyValidatorDefinition }
}