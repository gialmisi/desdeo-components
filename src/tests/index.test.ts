import {
  BarChartComponent,
  ParallelAxesComponent,
  GroupedBarChartComponent,
  StackedBarChartComponent,
  ScatterChartComponent,
  ScatterSelectionComponent,
  TableComponent
} from '../index'

describe('Chart components are exported', () => {
  it('BarChartComponent is truthy', () => {
    expect(BarChartComponent).toBeTruthy()
  })

  it('ParallelAxesComponent is truthy', () => {
    expect(ParallelAxesComponent).toBeTruthy()
  })

  it('GroupedBarChartComponent is truthy', () => {
    expect(GroupedBarChartComponent).toBeTruthy()
  })

  it('StackedBarChartComponent is truthy', () => {
    expect(StackedBarChartComponent).toBeTruthy()
  })

  it('ScatterChartComponent is truthy', () => {
    expect(ScatterChartComponent).toBeTruthy()
  })

  it('ScatterSelectionComponent is truthy', () => {
    expect(ScatterSelectionComponent).toBeTruthy()
  })

  it('TableComponent is truthy', () => {
    expect(TableComponent).toBeTruthy()
  })
})