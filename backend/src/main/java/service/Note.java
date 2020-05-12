package service;

public class Note {

    public String getNoteBy() {
        return noteBy;
    }

    public String getSubject() {
        return subject;
    }

    public String getNote() {
        return note;
    }

    public void setNoteBy(String noteBy) {
        this.noteBy = noteBy;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getId() {
        return id;
    }

    public Note(int id, String noteBy, String subject, String note) {
        this.id = id;
        this.noteBy = noteBy;
        this.subject = subject;
        this.note = note;
    }

    public void setId(int id) {
        this.id = id;
    }

    private int id;
    private String noteBy;
    private String subject;
    private String note;

    //json of class data
    @Override
    public String toString() {
//        return "Note [noteBy=" + noteBy + ", subject=" + subject + ", note=" + note + "]";
            return "Note [noteBy=" + noteBy + ", subject=" + subject + ", note=" + note + "]";
    }
}
