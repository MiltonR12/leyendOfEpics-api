import { pool } from "../db.js";

export const getTeams = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM leyendOfEpics')
  res.json(rows)
}

export const getTeam = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM leyendOfEpics WHERE id = ?', [req.params.id])
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const addTeam = async (req, res) => {
  const { name, captain, team, members, date, position } = req.body
  try {
    const [result] = await pool.query('INSERT INTO leyendOfEpics (name, captain, team, members, date, position) VALUES (?,?,?,?,?,?)', [name, captain, team, members, date, position])
    res.json({
      id: result.insertId,
      name,
      captain,
      team,
      members,
      date,
      position,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteTeam = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM leyendOfEpics WHERE id = ?', [req.params.id])
    if (result.affectedRows == 0) {
      return res.status(404).json({
        message: 'Team not found'
      })
    }
    return res.send(result)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateTeam = async (req, res) => {
  try {
    const [result] = await pool.query('UPDATE leyendOfEpics SET ? WHERE id = ?', [req.body, req.params.id])
    res.json(result)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}