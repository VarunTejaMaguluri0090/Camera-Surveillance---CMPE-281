const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "cloud281"
};

// Sample data to be inserted
const alerts = [
  {
    CameraName: 'Camera A',
    AlertID: 1,
    TimeDate: '2022-01-01 10:00:00',
    AlertType: 'Motion Detection',
    AlertLevel: 'High',
    Location: 'New York',
    x: 100,
    y: 100,
    Status: 'Open',
    AlertDescription: 'Description 1',
    ActionTaken: 'Action 1',
    AdditionalDetails: 'Details 1',
  },
  {
    CameraName: 'Camera B',
    AlertID: 2,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 50,
    y: 40,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
  {
    CameraName: 'Camera C',
    AlertID: 3,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 50,
    y: 10,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
  {
    CameraName: 'Camera D',
    AlertID: 4,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 50,
    y: 20,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
  {
    CameraName: 'Camera E',
    AlertID: 5,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 50,
    y: 50,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
  {
    CameraName: 'Camera F',
    AlertID: 6,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 10,
    y: 100,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
  {
    CameraName: 'Camera H',
    AlertID: 7,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 20,
    y: 100,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
  {
    CameraName: 'Camera I',
    AlertID: 8,
    TimeDate: '2022-01-02 12:00:00',
    AlertType: 'Object Detection',
    AlertLevel: 'Medium',
    Location: 'Los Angeles',
    x: 30,
    y: 100,
    Status: 'Open',
    AlertDescription: 'Description 2',
    ActionTaken: 'Action 2',
    AdditionalDetails: 'Details 2',
  },
];

async function insertAlerts() {
  try {
    // Connect to the database
    const connection = await mysql.createConnection(dbConfig);

    // Insert the alerts one by one
    for (let alert of alerts) {
      const sql = `
        INSERT INTO alerts (
          CameraName,
          AlertID,
          TimeDate,
          AlertType,
          AlertLevel,
          Location,
          X,
          Y,
          Status,
          AlertDescription,
          ActionTaken,
          AdditionalDetails
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const params = [
        alert.CameraName,
        alert.AlertID,
        alert.TimeDate,
        alert.AlertType,
        alert.AlertLevel,
        alert.Location,
        alert.x,
        alert.y,
        alert.Status,
        alert.AlertDescription,
        alert.ActionTaken,
        alert.AdditionalDetails,
      ];
      await connection.execute(sql, params);
    }

    console.log('Sample alerts inserted successfully!');
  } catch (error) {
    console.error('Failed to insert alerts:', error);
  }
}

insertAlerts();
