// Add interfaces for different optimization methods here.

export interface DataProps {
  data: Datum[],
  onClick?: (event: Datum) => void
}

export interface Datum extends Coordinate {
  label?: string,
  isSelected?: boolean
}

export interface Coordinate {
  x: number,
  y: number
}

// Example interfaces
export interface Iteration {
  variables: Variable[],
  parameters: Parameter[],
  iteration: number
}

export interface Parameter {
  parameter: number
}

export interface Variable {
  name: string,
  value: number
}