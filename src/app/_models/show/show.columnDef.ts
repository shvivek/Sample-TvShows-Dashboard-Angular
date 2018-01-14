export class ShowColumn {

    public columnDefs = [
        { field: 'id', headerName: '#', width: 50, cellRendererFramework: null },
        { field: 'name', headerName: 'Name', width: 250, cellRendererFramework: null },
        { field: 'language', headerName: 'Language', width: 150, cellRendererFramework: null },
        { field: 'genres', headerName: 'Genres', width: 250, cellRendererFramework: null },
        { field: 'type', headerName: 'Type', width: 145, cellRendererFramework: null },
        { field: 'status', headerName: 'Status', width: 145, cellRendererFramework: null },
        { field: 'premiered', headerName: 'Premiered On', width: 145, cellRendererFramework: null }
    ];
    constructor() { }
}
