import mongoose from 'mongoose';
export const Monster = mongoose.model(
"Monsters", {    
    name: String, 
    AC: Number, 
    HD: Number, 
    Att: String, 
    THAC0: Number, 
    MV: Number, 
    D: Number, 
    W: Number, 
    P: Number, 
    B: Number, 
    S: Number, 
    ML: Number, 
    AL: String, 
    XP: Number, 
    NA: String, 
    TT: String
}, "Monsters"
);